CaloriesDailyValue = 2000
TotalFatDailyValue = 65 
SodiumDailyValue = 2400  

class Food:
    def __init__(self,caloryFromFood,totalFatContent,sodiumContent):
        self.calory = caloryFromFood
        self.totalFat = totalFatContent
        self.sodium = sodiumContent
    def getCalory(self):
        return self.calory
    def getTotalFat(self):
        return self.totalFat
    def getSodium(self):
        return self.sodium
    def optimizedFood(self):
        caloryFromFood = self.calory
        caloryPercentDV = self.calory * 100 / CaloriesDailyValue
        totalFatContent=int(TotalFatDailyValue*caloryPercentDV/100)
        sodiumContent=int(SodiumDailyValue*caloryPercentDV/100)
        return Food(caloryFromFood, totalFatContent, sodiumContent)

Food1 = Food(450, 21, 2400)
print("总脂肪含量最好是：",Food1.optimizedFood().getTotalFat(),"克。")
print("钠离子含量最好是：",Food1.optimizedFood().getSodium(),"毫克。")

# pythontutor's permanent link:
# http://pythontutor.com/visualize.html#code=CaloriesDailyValue%20%3D%202000%0ATotalFatDailyValue%20%3D%2065%20%0ASodiumDailyValue%20%3D%202400%20%20%0A%0Aclass%20Food%3A%0A%20%20%20%20def%20__init__%28self,caloryFromFood,totalFatContent,sodiumContent%29%3A%0A%20%20%20%20%20%20%20%20self.calory%20%3D%20caloryFromFood%0A%20%20%20%20%20%20%20%20self.totalFat%20%3D%20totalFatContent%0A%20%20%20%20%20%20%20%20self.sodium%20%3D%20sodiumContent%0A%20%20%20%20def%20getCalory%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.calory%0A%20%20%20%20def%20getTotalFat%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.totalFat%0A%20%20%20%20def%20getSodium%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.sodium%0A%20%20%20%20def%20optimizedFood%28self%29%3A%0A%20%20%20%20%20%20%20%20caloryFromFood%20%3D%20self.calory%0A%20%20%20%20%20%20%20%20caloryPercentDV%20%3D%20self.calory%20*%20100%20/%20CaloriesDailyValue%0A%20%20%20%20%20%20%20%20totalFatContent%3Dint%28TotalFatDailyValue*caloryPercentDV/100%29%0A%20%20%20%20%20%20%20%20sodiumContent%3Dint%28SodiumDailyValue*caloryPercentDV/100%29%0A%20%20%20%20%20%20%20%20return%20Food%28caloryFromFood,%20totalFatContent,%20sodiumContent%29%0A%0AFood1%20%3D%20Food%28450,%2021,%202400%29%0Aprint%28%22%E6%80%BB%E8%84%82%E8%82%AA%E5%90%AB%E9%87%8F%E6%9C%80%E5%A5%BD%E6%98%AF%EF%BC%9A%22,Food1.optimizedFood%28%29.getTotalFat%28%29,%22%E5%85%8B%E3%80%82%22%29%0Aprint%28%22%E9%92%A0%E7%A6%BB%E5%AD%90%E5%90%AB%E9%87%8F%E6%9C%80%E5%A5%BD%E6%98%AF%EF%BC%9A%22,Food1.optimizedFood%28%29.getSodium%28%29,%22%E6%AF%AB%E5%85%8B%E3%80%82%22%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false