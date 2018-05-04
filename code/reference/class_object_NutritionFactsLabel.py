class Food(object):
    def __init__(self, caloryFromFood, totalFatContent, sodiumContent):
        self.calory = caloryFromFood
        self.totalFat = totalFatContent
        self.sodium = sodiumContent

    def getCalory(self):
        return self.calory
    def getTotalFat(self):
        return self.totalFat
    def getSodium(self):
        return self.sodium

    def caloryPercentDV(self):
        CaloriesDailyValue = 2000       
        return int((self.calory * 100 / CaloriesDailyValue))
    def totalFatPercentDV(self):
        TotalFatDailyValue = 65  
        return int((self.totalFat * 100 / TotalFatDailyValue))
    def sodiumPercentDV(self):
        SodiumDailyValue = 2400     
        return int((self.sodium * 100 / SodiumDailyValue))

    def totalFatPercentDVQuotient(self):
        CaloriesDailyValue = 2000
        TotalFatDailyValue = 65  
        caloryPercentDV = self.calory * 100 / CaloriesDailyValue
        totalFatPercentDV = self.totalFat * 100 / TotalFatDailyValue
        return round((totalFatPercentDV / caloryPercentDV),1)
    def sodiumPercentDVQuotient(self):
        CaloriesDailyValue = 2000
        SodiumDailyValue = 2400   
        caloryPercentDV = self.calory * 100 / CaloriesDailyValue
        sodiumPercentDV = self.sodium * 100 / SodiumDailyValue                        
        return round((sodiumPercentDV / caloryPercentDV),1)

    def optimizedFood(self):
        CaloriesDailyValue = 2000
        TotalFatDailyValue = 65 
        SodiumDailyValue = 2400  
        
        caloryFromFood = self.calory
        caloryPercentDV = self.calory * 100 / CaloriesDailyValue
        totalFatContent = int(TotalFatDailyValue * caloryPercentDV / 100)
        sodiumContent = int(SodiumDailyValue * caloryPercentDV / 100)

        return Food(caloryFromFood, totalFatContent, sodiumContent)

def caloryComparison(Food1, Food2):
    caloryDiffer = Food1.getCalory() - Food2.getCalory()
    return caloryDiffer

Food1 = Food(450, 21, 2400)
Food2 = Food(410, 20, 4400)

print("这份康师傅方便面的能量是：",Food1.getCalory(),"卡路里。")
print("总脂肪含量是：",Food1.getTotalFat(),"克。")
print("钠离子含量是：",Food1.getSodium(),"毫克。")
print("占卡路里每天需求总量的：",Food1.caloryPercentDV(),"%")
print("占总脂肪每天需求总量的：",Food1.totalFatPercentDV(),"%")
print("占钠每天需求总量的：",Food1.sodiumPercentDV(),"%")
print("总脂肪占比/卡路里占比：",Food1.totalFatPercentDVQuotient(),"%")
print("钠占比/卡路里占比：",Food1.sodiumPercentDVQuotient(),"%")

print("两种食物的热量差是：",caloryComparison(Food1, Food2),"卡路里。")
print("营养含量数据中的总脂肪含量最好是：",Food1.optimizedFood().getTotalFat(),"克。")
print("营养含量数据中的钠离子含量最好是：",Food1.optimizedFood().getSodium(),"毫克。")
