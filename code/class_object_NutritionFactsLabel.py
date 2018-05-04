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
		return (self.calory * 100 / CaloriesDailyValue).toFixed(0)
	def totalFatPercentDV(self):
	  TotalFatDailyValue = 60  
		return (self.totalFat * 100 / TotalFatDailyValue).toFixed(0)
	def sodiumPercentDV(self):
	  SodiumDailyValue = 2000     
		return (self.sodium * 100 / SodiumDailyValue).toFixed(0)

	

instantNoodle = Food(100, 30, 60)
print("这份康师傅方便面的能量是：",instantNoodle.getCalory(),"卡路里。")
print("总脂肪含量是：",instantNoodle.getTotalFat(),"克。")
print("钠离子含量是：",instantNoodle.getSodium(),"毫克。")
print("占卡路里每天需求总量的：",instantNoodle.caloryPercentDV(),"%")
print("占总脂肪每天需求总量的：",instantNoodle.totalFatPercentDV(),"%")
print("占钠每天需求总量的：",instantNoodle.sodiumPercentDV(),"%")

                              
                             
