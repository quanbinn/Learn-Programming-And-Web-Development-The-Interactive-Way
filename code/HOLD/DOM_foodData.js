class Food
	CALORIES_DAILY_VALUE = 2000                                  # Constant of calories's daily value 
	TOTAL_FAT_DAILY_VALUE = 65                                   # Constant of total fat's maximum daily value 
	SATURATED_FAT_DAILY_VALUE = 20                               # Constant of saturated fat's maximum daily value 
	CHOLESTEROL_DAILY_VALUE = 300                                # Constant of cholesterol's maximum daily value 
	SODIUM_DAILY_VALUE = 2400                                    # Constant of sodium's maximum daily value


	attr_reader :name, :calories, :totalFat, :saturatedFat,
			    :transFat, :cholesterol, :sodium, :caloriesPercentDV,
			    :totalFatPercentDV, :saturatedFatPercentDV,
	            :cholesterolPercentDV, :sodiumPercentDV,
	            :totalFatPercentDVQuotient, :saturatedFatPercentDVQuotient,
	            :cholesterolPercentDVQuotient, :sodiumPercentDVQuotient 

	def initialize(name, calories, totalFat, saturatedFat,        # Initralize the name and nutrition facts of Food
		           transFat, cholesterol, sodium)
	  @name = name	                                              # name
	  @calories = calories                                        # calories
	  @totalFat = totalFat                                        # total fat
	  @saturatedFat = saturatedFat                                # saturated fat
	  @transFat = transFat                                        # trans fat
	  @cholesterol = cholesterol                                  # cholesterol
	  @sodium = sodium                                            # sodium

	  @caloriesPercentDV = @calories * 100 / CALORIES_DAILY_VALUE             # Calculate calories's %DV
	  @totalFatPercentDV = @totalFat * 100 / TOTAL_FAT_DAILY_VALUE            # Calculate totalFat's %DV
	  @saturatedFatPercentDV = @saturatedFat* 100 / SATURATED_FAT_DAILY_VALUE # Calculate saturatedFat's %DV
	  @cholesterolPercentDV = @cholesterol * 100 / CHOLESTEROL_DAILY_VALUE    # Calculate cholesterol's %DV
	  @sodiumPercentDV = @sodium * 100 / SODIUM_DAILY_VALUE                   # Calculate sodium's %DV

	  @totalFatPercentDVQuotient = @totalFatPercentDV.to_f / @caloriesPercentDV.to_f         # Calculate totalFat's %DV / calories's %DV
	  @saturatedFatPercentDVQuotient = @saturatedFatPercentDV.to_f / @caloriesPercentDV.to_f # Calculate saturatedFat's %DV / calories's %DV
	  @cholesterolPercentDVQuotient = @cholesterolPercentDV.to_f / @caloriesPercentDV.to_f   # Calculate cholesterol's %DV / calories's %DV	
	  @sodiumPercentDVQuotient = @sodiumPercentDV.to_f / @caloriesPercentDV.to_f             # Calculate sodium's %DV / calories's %DV
	end
	
	def description                                               # The description of the food's nutrition facts
	  puts "For #{@name}:"
	  puts "Calories is #{@calories}, Total Fat is #{@totalFat}g"
	  puts "Saturated Fat is #{@saturatedFat}g, Trans Fat is #{@transFat}g"
	  puts "Cholesterol is #{@cholesterol}mg, Sodium is #{@sodium}mg"
	end

	def whetherThereIsTransFat                                    # Check whether there is trans fat
	  if @transFat > 0
	  	puts "There is trans fat in this food."
	  	puts "Therefore, this is the unhealthy food and do not eat it."
	  else
	  	outputCaloriesPercentDV
	  	totalFatDietRecommendation
	  	saturatedFatDietRecommendation
	  	cholesterolDietRecommendation 
	  	sodiumDietRecommendation
	  end
	end

	def outputCaloriesPercentDV                                   # Output the amount of calories per one saving and the % DV 
	  puts "Calories: #{@calories}, #{@caloriesPercentDV}%" 
	end 

	def totalFatDietRecommendation                                # Output the amount of total fat per one saving                  
	  puts "Total Fat is: #{@totalFat}g, #{@totalFatPercentDV}%"  #	and provide the diet recommendation
	  if @totalFatPercentDVQuotient <= 1
	  	puts "Total fat is in normal range and this is a good food."
	  elsif 1 < @totalFatPercentDVQuotient && @totalFatPercentDVQuotient <= 1.5
	  	puts "This food contains more fat you need. Eat less."
	  else
	  	puts "This food contains a lot more you need. Eat a little or do not eat it."
	  end
	end

	def saturatedFatDietRecommendation                                       # Output the amount of saturated fat per one saving                  
	  puts "Saturated Fat is: #{@saturatedFat}g, #{@saturatedFatPercentDV}%" #	and provide the diet recommendation
	  if @saturatedFatPercentDVQuotient <= 1
	  	puts "Saturated fat is in normal range and this is a good food."
	  elsif 1 < @saturatedFatPercentDVQuotient <= 1.5
	  	puts "This food contains more saturated fat you can consume. Eat a little with caution."
	  else
	  	puts "This food contains a lot more saturated fat you can consume. Eat a very little or do not eat it."
	  end
	end

	def cholesterolDietRecommendation                                        # Output the amount of cholesterol per one saving                  
	  puts "Cholesterol is: #{@cholesterol}mg, #{@cholesterolPercentDV}%"    # and provide the diet recommendation
	  if @cholesterolPercentDVQuotient <= 1
	  	puts "Cholesterol is in normal range and this is a good food."
	  elsif 1 < @cholesterolPercentDVQuotient && @cholesterolPercentDVQuotient <= 1.5
	  	puts "This food contains more cholesterol you need. Eat a little with caution."
	  else
	  	puts "This food contains a lot more cholesterol you need. Eat a very little or do not eat it."
	  end
	end

	def sodiumDietRecommendation                                             # Output the amount of sodium per one saving                  
	  puts "Sodium is: #{@sodium}mg, #{@sodiumPercentDV}%"                   # and provide the diet recommendation
	  if @sodiumPercentDVQuotient <= 1
	  	puts "Sodium is in normal range and this is a good food."
	  elsif 1 < @sodiumPercentDVQuotient && @sodiumPercentDVQuotient <= 1.5
	  	puts "This food contains more sodium you need. Eat a little with caution."
	  else
	  	puts "This food contains a lot more sodium you need. Eat a very little or do not eat it."
	  end
	end

end

egg = Food.new("Egg", 100, 10, 2, 0, 240, 10)

#egg.description

egg.whetherThereIsTransFat



