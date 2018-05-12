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

def caloryComparison(Food1, Food2):
    caloryDiffer = Food1.getCalory() - Food2.getCalory()
    return caloryDiffer

Food1 = Food(450, 21, 2400)
Food2 = Food(410, 20, 4400)

print("两种食物的热量差是：",caloryComparison(Food1, Food2),"卡路里。")

# pythontutor's permanent link:
# http://pythontutor.com/visualize.html#code=class%20Food%3A%0A%20%20%20%20def%20__init__%28self,%20caloryFromFood,%20totalFatContent,%20sodiumContent%29%3A%0A%20%20%20%20%20%20%20%20self.calory%20%3D%20caloryFromFood%0A%20%20%20%20%20%20%20%20self.totalFat%20%3D%20totalFatContent%0A%20%20%20%20%20%20%20%20self.sodium%20%3D%20sodiumContent%0A%20%20%20%20def%20getCalory%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.calory%0A%20%20%20%20def%20getTotalFat%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.totalFat%0A%20%20%20%20def%20getSodium%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.sodium%0A%0Adef%20caloryComparison%28Food1,%20Food2%29%3A%0A%20%20%20%20caloryDiffer%20%3D%20Food1.getCalory%28%29%20-%20Food2.getCalory%28%29%0A%20%20%20%20return%20caloryDiffer%0A%0AFood1%20%3D%20Food%28450,%2021,%202400%29%0AFood2%20%3D%20Food%28410,%2020,%204400%29%0A%0Aprint%28%22%E4%B8%A4%E7%A7%8D%E9%A3%9F%E7%89%A9%E7%9A%84%E7%83%AD%E9%87%8F%E5%B7%AE%E6%98%AF%EF%BC%9A%22,caloryComparison%28Food1,%20Food2%29,%22%E5%8D%A1%E8%B7%AF%E9%87%8C%E3%80%82%22%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false

# pythontutor's link before debugging:
# http://pythontutor.com/live.html#code=class%20Food%3A%0A%20%20%20%20def%20__init__%28self,%20caloryFromFood,%20totalFatContent,%20sodiumContent%29%3A%0A%20%20%20%20%20%20%20%20self.calory%20%3D%20caloryFromFood%0A%20%20%20%20%20%20%20%20self.totalFat%20%3D%20totalFatContent%0A%20%20%20%20%20%20%20%20self.sodium%20%3D%20sodiumContent%0A%20%20%20%20def%20getCalory%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.calory%0A%20%20%20%20def%20getTotalFat%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.totalFat%0A%20%20%20%20def%20getSodium%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.sodium%0A%0Adef%20caloryComparison%28Food1,%20Food2%29%3A%0A%20%20%20%20caloryDiffer%20%3D%20Food1.getCalory%28%29%20-%20%28Food2.getCalory%28%29%20*2%20-%2050%29%0A%20%20%20%20return%20caloryDiffer%0Adef%20calorySum%28Food1,%20Food2%29%3A%0A%20%20%20%20return%20Food1.getCalory%28%29%20%2B%20Food2.getCalory%28%29%0Adef%20totalFatComparison%28Food1,%20Food2%29%3A%0A%20%20%20%20totalFatDiffer%20%3D%20Food1.getTotalFat%28%29%20-%20Food2.getTotalFat%28%29%0A%20%20%20%20return%20totalFatDiffer%0Adef%20sodiumComparison%28Food1,%20Food2%29%3A%0A%20%20%20%20sodiumDiffer%20%3D%20Food1.getSodium%28%29%20-%20Food2.getSodium%28%29%0A%20%20%20%20return%20sodiumDiffer%0AFood1%20%3D%20Food%28450,%2021,%202400%29%0AFood2%20%3D%20Food%28750,%2020,%204400%29%0A%0Aprint%28%22The%20calory%20difference%3A%22,caloryComparison%28Food1,%20Food2%29,%22kcals.%22%29%0Aprint%28%22%E6%80%BB%E8%84%82%E8%82%AA%E5%90%AB%E9%87%8F%E5%B7%AE%3A%22,totalFatComparison%28Food1,%20Food2%29,%22%E5%85%8B.%22%29%0Aprint%28%22%E9%92%A0%E7%A6%BB%E5%AD%90%E5%90%AB%E9%87%8F%E5%B7%AE%3A%22,sodiumComparison%28Food1,%20Food2%29,%22%E6%AF%AB%E5%85%8B.%22%29%0Aprint%28%22%E4%B8%A4%E7%A7%8D%E9%A3%9F%E7%89%A9%E7%9A%84%E7%83%AD%E9%87%8F%E6%80%BB%E5%92%8C%E6%98%AF%EF%BC%9A%22,calorySum%28Food1,%20Food2%29,%22%E5%8D%A1%E8%B7%AF%E9%87%8C.%22%29&cumulative=false&curInstr=60&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false