class Food:
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

Food1 = Food(450, 21, 2400)

print("占卡路里每天需求总量的：",Food1.caloryPercentDV(),"%")
print("占总脂肪每天需求总量的：",Food1.totalFatPercentDV(),"%")
print("占钠每天需求总量的：",Food1.sodiumPercentDV(),"%")

# pythontutor's permanent link:
# http://pythontutor.com/live.html#code=class%20Food%3A%0A%20%20%20%20def%20__init__%28self,%20caloryFromFood,%20totalFatContent,%20sodiumContent%29%3A%0A%20%20%20%20%20%20%20%20self.calory%20%3D%20caloryFromFood%0A%20%20%20%20%20%20%20%20self.totalFat%20%3D%20totalFatContent%0A%20%20%20%20%20%20%20%20self.sodium%20%3D%20sodiumContent%0A%20%20%20%20def%20getCalory%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.calory%0A%20%20%20%20def%20getTotalFat%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.totalFat%0A%20%20%20%20def%20getSodium%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.sodium%0A%0A%20%20%20%20def%20caloryPercentDV%28self%29%3A%0A%20%20%20%20%20%20%20%20CaloriesDailyValue%20%3D%202000%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20return%20int%28%28self.calory%20*%20100%20/%20CaloriesDailyValue%29%29%0A%20%20%20%20def%20totalFatPercentDV%28self%29%3A%0A%20%20%20%20%20%20%20%20TotalFatDailyValue%20%3D%2065%20%20%0A%20%20%20%20%20%20%20%20return%20int%28%28self.totalFat%20*%20100%20/%20TotalFatDailyValue%29%29%0A%20%20%20%20def%20sodiumPercentDV%28self%29%3A%0A%20%20%20%20%20%20%20%20SodiumDailyValue%20%3D%202400%20%20%20%20%20%0A%20%20%20%20%20%20%20%20return%20int%28%28self.sodium%20*%20100%20/%20SodiumDailyValue%29%29%0A%0AFood1%20%3D%20Food%28450,%2021,%202400%29%0A%0Aprint%28%22%E5%8D%A0%E5%8D%A1%E8%B7%AF%E9%87%8C%E6%AF%8F%E5%A4%A9%E9%9C%80%E6%B1%82%E6%80%BB%E9%87%8F%E7%9A%84%EF%BC%9A%22,Food1.caloryPercentDV%28%29,%22%25%22%29%0Aprint%28%22%E5%8D%A0%E6%80%BB%E8%84%82%E8%82%AA%E6%AF%8F%E5%A4%A9%E9%9C%80%E6%B1%82%E6%80%BB%E9%87%8F%E7%9A%84%EF%BC%9A%22,Food1.totalFatPercentDV%28%29,%22%25%22%29%0Aprint%28%22%E5%8D%A0%E9%92%A0%E6%AF%8F%E5%A4%A9%E9%9C%80%E6%B1%82%E6%80%BB%E9%87%8F%E7%9A%84%EF%BC%9A%22,Food1.sodiumPercentDV%28%29,%22%25%22%29%0A%0A%23%20pythontutor's%20permanent%20link%3A%0A%23%20&cumulative=false&curInstr=22&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false