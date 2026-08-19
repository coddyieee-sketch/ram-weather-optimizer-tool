import pytest
from fastapi.testclient import TestClient
from app import app

@pytest.fixture(autouse=True)
def reset_data():
    client = TestClient(app)
    client.post("/reset")

def test_reset_data():
    client = TestClient(app)
    response = client.post("/reset")
    assert response.status_code == 200
    assert response.json() == {"message": "Data store reset"}

def test_submit_data():
    client = TestClient(app)
    data = {"key": "value"}
    response = client.post("/submit_data", json=data)
    assert response.status_code == 200
    assert response.json() == {"message": "Data submitted"}

def test_get_data():
    client = TestClient(app)
    data = {"key": "value"}
    client.post("/submit_data", json=data)
    response = client.get("/get_data")
    assert response.status_code == 200
    assert response.json() == [data]

def test_get_stats():
    client = TestClient(app)
    data = {"key": "value"}
    client.post("/submit_data", json=data)
    response = client.get("/get_stats")
    assert response.status_code == 200
    assert response.json() == {"count": 1}

def test_submit_invalid_data():
    client = TestClient(app)
    data = "invalid data"
    response = client.post("/submit_data", json=data)
    assert response.status_code == 422

def test_get_data_empty():
    client = TestClient(app)
    response = client.get("/get_data")
    assert response.status_code == 200
    assert response.json() == []

def test_get_stats_empty():
    client = TestClient(app)
    response = client.get("/get_stats")
    assert response.status_code == 200
    assert response.json() == {"count": 0}