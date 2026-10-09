from fastapi import FastAPI
from pydantic import BaseModel

class Student(BaseModel):
    stuname:str
    studept:str
    stuusername:str
    stupassword:str
    stuage:int
    stumark:float

app=FastAPI()

@app.get("/getStudents")
def getStudents():
    return "Get Students method called"
@app.post("/addStudent")
def addStudent(stu: Student):
    return{"student_details":stu}

@app.put("/updateStudent")
def updateStudent():
    return "Update Student method called"
@app.delete("/deleteStudent")
def deleteStudent():    
    return "Delete Student method called"
@app.get("/getParticularStudentById/{id}")
def getParticularStudentById(id:int):
    return {"userid":id}
@app.get("/filterdept")
def filterdept(dept:str,marks:int):
    return {"department":dept,"marks":marks}
  