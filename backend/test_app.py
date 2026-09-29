import pytest
from fastapi.testclient import TestClient
from app import app

@pytest.fixture(autouse=True)
def reset_data():
    client = TestClient(app)
    client.post("/reset")

def test_reset():
    client = TestClient(app)
    response = client.post("/reset")
    assert response.status_code == 200
    assert response.json() == {"message": "Data store reset"}

def test_submit():
    client = TestClient(app)
    data = {"key": "some_key", "value": "some_value"}
    response = client.post("/submit", json=data)
    assert response.status_code == 200
    assert response.json() == {"message": "Data submitted"}

def test_fetch():
    client = TestClient(app)
    data = {"key": "some_key", "value": "some_value"}
    client.post("/submit", json=data)
    response = client.get("/fetch")
    assert response.status_code == 200
    assert response.json() == [data]

def test_stats():
    client = TestClient(app)
    data = {"key": "some_key", "value": "some_value"}
    client.post("/submit", json=data)
    response = client.get("/stats")
    assert response.status_code == 200
    assert response.json() == {"count": 1}

def test_logs():
    client = TestClient(app)
    data = {"key": "some_key", "value": "some_value"}
    client.post("/submit", json=data)
    response = client.get("/logs")
    assert response.status_code == 200
    assert response.json() == [data]

def test_invalid_submit():
    client = TestClient(app)
    data = {"invalid_key": "some_value"}
    response = client.post("/submit", json=data)
    assert response.status_code == 422

def test_empty_submit():
    client = TestClient(app)
    response = client.post("/submit", json={})
    assert response.status_code == 422