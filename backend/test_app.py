import pytest
from fastapi.testclient import TestClient
from app import app

@pytest.fixture(autouse=True)
def reset_state():
    client = TestClient(app)
    client.post("/reset")

def test_get_data():
    client = TestClient(app)
    response = client.get("/data")
    assert response.status_code == 200
    assert response.json() == []

def test_post_data():
    client = TestClient(app)
    data = {"key": "value"}
    response = client.post("/data", json=data)
    assert response.status_code == 200
    assert response.json() == {"message": "Data added successfully"}

def test_get_stats():
    client = TestClient(app)
    response = client.get("/stats")
    assert response.status_code == 200
    assert response.json() == {"data_count": 0}

def test_get_logs():
    client = TestClient(app)
    response = client.get("/logs")
    assert response.status_code == 200
    assert response.json() == []

def test_reset_data():
    client = TestClient(app)
    data = {"key": "value"}
    client.post("/data", json=data)
    response = client.post("/reset")
    assert response.status_code == 200
    assert response.json() == {"message": "Data reset successfully"}

def test_get_data_after_reset():
    client = TestClient(app)
    data = {"key": "value"}
    client.post("/data", json=data)
    client.post("/reset")
    response = client.get("/data")
    assert response.status_code == 200
    assert response.json() == []

def test_get_stats_after_reset():
    client = TestClient(app)
    data = {"key": "value"}
    client.post("/data", json=data)
    client.post("/reset")
    response = client.get("/stats")
    assert response.status_code == 200
    assert response.json() == {"data_count": 0}

def test_get_logs_after_reset():
    client = TestClient(app)
    data = {"key": "value"}
    client.post("/data", json=data)
    client.post("/reset")
    response = client.get("/logs")
    assert response.status_code == 200
    assert response.json() == []