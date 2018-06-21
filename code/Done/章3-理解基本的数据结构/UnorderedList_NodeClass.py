class Node:
    def __init__(self,initialdata):
        self.data = initialdata
        self.tail = None
    def getData(self):
        return self.data
    def getTail(self):
        return self.tail

person1 = Node({'Role': 'Me', 'BMI': 21.1})
person2 = Node({'Role': 'Wife', 'BMI':18.2})
print(person1.getData()['Role'],"的BMI是",person1.getData()['BMI'])
print(person2.getData()['Role'],"的BMI是",person2.getData()['BMI'])

#    def changeData(self,newdata):
#        self.data = newdata        
#    def changeTail(self,newtail):
#        self.tail = newtail

# pythontutor's permanent link:
# http://pythontutor.com/visualize.html#code=class%20Node%3A%0A%20%20%20%20def%20__init__%28self,initialdata%29%3A%0A%20%20%20%20%20%20%20%20self.data%20%3D%20initialdata%0A%20%20%20%20%20%20%20%20self.tail%20%3D%20None%0A%20%20%20%20def%20getData%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.data%0A%20%20%20%20def%20getTail%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.tail%0A%0Aperson1%20%3D%20Node%28%7B'Role'%3A%20'Me',%20'BMI'%3A%2021.1%7D%29%0Aperson2%20%3D%20Node%28%7B'Role'%3A%20'Wife',%20'BMI'%3A18.2%7D%29%0Aprint%28person1.getData%28%29%5B'Role'%5D,%22%E7%9A%84BMI%E6%98%AF%22,person1.getData%28%29%5B'BMI'%5D%29%0Aprint%28person2.getData%28%29%5B'Role'%5D,%22%E7%9A%84BMI%E6%98%AF%22,person2.getData%28%29%5B'BMI'%5D%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false