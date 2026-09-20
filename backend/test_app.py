import pytest
from fastapi.testclient import TestClient
from app import app

@pytest.fixture(autouse=True)
def reset_data():
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
    response = client.get("/data")
    assert response.status_code == 200
    assert response.json() == []

def test_post_data_multiple_times():
    client = TestClient(app)
    data1 = {"key1": "value1"}
    data2 = {"key2": "value2"}
    client.post("/data", json=data1)
    client.post("/data", json=data2)
    response = client.get("/data")
    assert response.status_code == 200
    assert response.json() == [data1, data2]

def test_get_stats_after_posting_data():
    client = TestClient(app)
    data = {"key": "value"}
    client.post("/data", json=data)
    response = client.get("/stats")
    assert response.status_code == 200
    assert response.json() == {"data_count": 1}

def test_get_logs_after_posting_data():
    client = TestClient(app)
    data = {"key": "value"}
    client.post("/data", json=data)
    response = client.get("/logs")
    assert response.status_code == 200
    assert response.json() == [data]