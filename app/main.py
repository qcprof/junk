from fastapi import FastAPI, Response, status, HTTPException
from pydantic import BaseModel

import uvicorn

app = FastAPI()

class User(BaseModel):
  id: int
  username: str

all_users = [{"id":1, "username":"anique"}, {"id":2, "username":"jim"}]

def find_user(id):
  for u in all_users:
    if u['id'] == id:
      return u

@app.get("/")
async def main():
    return {"hello": "world!"}

@app.get("/users")
async def get_users():
    return {"data": all_users}

@app.post("/users", status_code = status.HTTP_201_CREATED)
async def create_user(user:User):
    all_users.append(user.dict())
    return {"data": user}

@app.get("/users/{id}")
def get_user(id: int):
    user = find_user(id)
    if not user:
      raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = f"User with ID: {id} was not found.")
    return {"data": user}

@app.delete("/users/{id}", status_code = status.HTTP_204_NO_CONTENT)
def delete_user(id: int):
    all_users.pop(0)
    return {Response(status_code = status.HTTP_204_NO_CONTENT)}

@app.put("/users/{id}", status_code = status.HTTP_200_OK)
def update_user(id: int, user: User):
    all_users[id-1] = user.dict()
    return {"data": f"updated {all_users[id-1]}" }

#modified in .replit entrypoint app/main.py since my main.py is in app folder
uvicorn.run(app, port = 8080, host = "0.0.0.0")