import pytest
from fastapi.testclient import TestClient
from app import app

@pytest.fixture(autouse=True)
def reset_state():
    client = TestClient(app)
    client.post("/reset")

def test_reset_data():
    client = TestClient(app)
    response = client.post("/reset")
    assert response.status_code == 200
    assert response.json() == {"message": "Data reset successfully"}

def test_submit_data():
    client = TestClient(app)
    response = client.post("/submit_data", json={"key": "some_key", "value": "some_value"})
    assert response.status_code == 200
    assert response.json() == {"message": "Data submitted successfully"}

def test_get_data():
    client = TestClient(app)
    client.post("/submit_data", json={"key": "some_key", "value": "some_value"})
    response = client.get("/get_data")
    assert response.status_code == 200
    assert response.json() == [{"key": "some_key", "value": "some_value"}]

def test_get_stats():
    client = TestClient(app)
    client.post("/submit_stats", json={"key": "some_key", "value": "some_value"})
    response = client.get("/get_stats")
    assert response.status_code == 200
    assert response.json() == [{"key": "some_key", "value": "some_value"}]

def test_submit_invalid_data():
    client = TestClient(app)
    response = client.post("/submit_data", json={"invalid": "data"})
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
    assert response.json() == []