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

Food1 = Food(450, 21, 2400)

print("这份康师傅海鲜面的热量是：",Food1.getCalory(),"卡路里。")
print("总脂肪含量是：",Food1.getTotalFat(),"克。")
print("钠离子含量是：",Food1.getSodium(),"毫克。")

# pythontutor's permanent link:
# http://pythontutor.com/live.html#code=class%20Food%3A%0A%20%20%20%20def%20__init__%28self,%20caloryFromFood,%20totalFatContent,%20sodiumContent%29%3A%0A%20%20%20%20%20%20%20%20self.calory%20%3D%20caloryFromFood%0A%20%20%20%20%20%20%20%20self.totalFat%20%3D%20totalFatContent%0A%20%20%20%20%20%20%20%20self.sodium%20%3D%20sodiumContent%0A%0A%20%20%20%20def%20getCalory%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.calory%0A%20%20%20%20def%20getTotalFat%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.totalFat%0A%20%20%20%20def%20getSodium%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20self.sodium%0A%0AFood1%20%3D%20Food%28450,%2021,%202400%29%0A%0Aprint%28%22%E8%BF%99%E4%BB%BD%E5%BA%B7%E5%B8%88%E5%82%85%E6%B5%B7%E9%B2%9C%E9%9D%A2%E7%9A%84%E7%83%AD%E9%87%8F%E6%98%AF%EF%BC%9A%22,Food1.getCalory%28%29,%22%E5%8D%A1%E8%B7%AF%E9%87%8C%E3%80%82%22%29%0Aprint%28%22%E6%80%BB%E8%84%82%E8%82%AA%E5%90%AB%E9%87%8F%E6%98%AF%EF%BC%9A%22,Food1.getTotalFat%28%29,%22%E5%85%8B%E3%80%82%22%29%0Aprint%28%22%E9%92%A0%E7%A6%BB%E5%AD%90%E5%90%AB%E9%87%8F%E6%98%AF%EF%BC%9A%22,Food1.getSodium%28%29,%22%E6%AF%AB%E5%85%8B%E3%80%82%22%29&cumulative=false&curInstr=19&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false