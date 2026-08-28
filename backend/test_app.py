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
    data = {"key": "some_key", "value": "some_value"}
    response = client.post("/submit_data", json=data)
    assert response.status_code == 200
    assert response.json() == {"message": "Data submitted successfully"}

def test_get_data():
    client = TestClient(app)
    data = {"key": "some_key", "value": "some_value"}
    client.post("/submit_data", json=data)
    response = client.get("/get_data")
    assert response.status_code == 200
    assert response.json() == [data]

def test_get_stats():
    client = TestClient(app)
    response = client.get("/get_stats")
    assert response.status_code == 200
    assert response.json() == {"cache_hits": 0, "cache_misses": 0}

def test_log_query():
    client = TestClient(app)
    query = {"query": "test query"}
    response = client.post("/log_query", json=query)
    assert response.status_code == 200
    assert response.json() == {"message": "Query logged successfully"}

def test_invalid_submit_data():
    client = TestClient(app)
    data = {"invalid_key": "some_value"}
    response = client.post("/submit_data", json=data)
    assert response.status_code == 422

def test_invalid_log_query():
    client = TestClient(app)
    query = {"query": ""}
    response = client.post("/log_query", json=query)
    assert response.status_code == 422