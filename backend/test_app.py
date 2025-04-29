import os
import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_apikey(client):
    os.environ['NYT_API_KEY'] = 'test_api_key'

    response = client.get('/api/key')
    assert response.status_code == 200
    data = response.get_json()
    assert data == {"apiKey": "test_api_key"}

def test_apikey_not_set(client):
    if 'NYT_API_KEY' in os.environ:
        del os.environ['NYT_API_KEY']
    response = client.get('/api/key')
    assert response.status_code == 200
    data = response.get_json()
    assert "apiKey" in data
    assert data["apiKey"] is None or isinstance(data["apiKey"], str)

