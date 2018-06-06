class Node:
    def __init__(self,initialdata):
        self.data = initialdata
        self.tail = None
    def changeTail(self,newtail):self.tail = newtail

class UnorderedList:
    def __init__(self):self.head = None
    def add(self,initialdata):
        tempnode = Node(initialdata)
        tempnode.changeTail(self.head)
        self.head = tempnode

list1 = UnorderedList()
list1.add('My BMI is 21.1')
list1.add("Wife's BMI is 18.2")

# list1.add({'Role': 'Mom', 'BMI': 22.7})
# pythontutor's permanent link:
# http://pythontutor.com/visualize.html#code=class%20Node%3A%0A%20%20%20%20def%20__init__%28self,initialdata%29%3A%0A%20%20%20%20%20%20%20%20self.data%20%3D%20initialdata%0A%20%20%20%20%20%20%20%20self.tail%20%3D%20None%0A%20%20%20%20def%20changeTail%28self,newtail%29%3Aself.tail%20%3D%20newtail%0A%0Aclass%20UnorderedList%3A%0A%20%20%20%20def%20__init__%28self%29%3Aself.head%20%3D%20None%0A%20%20%20%20def%20add%28self,initialdata%29%3A%0A%20%20%20%20%20%20%20%20tempnode%20%3D%20Node%28initialdata%29%0A%20%20%20%20%20%20%20%20tempnode.changeTail%28self.head%29%0A%20%20%20%20%20%20%20%20self.head%20%3D%20tempnode%0A%0Alist1%20%3D%20UnorderedList%28%29%0Alist1.add%28'My%20BMI%20is%2021.1'%29%0Alist1.add%28%22Wife's%20BMI%20is%2018.2%22%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false