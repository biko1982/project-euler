## Logging all first f Fibonacci-terms

p = 1 #previous number
i = 1 #current number
n = 1 #next number
f = 1 #fibonacci term

while f <= 10

	i = n
	puts i
	n = p + i
	p = i
	f += 1

end


##Sum of all even Fibonacci terms not exceeding 4000000

p = 1
i = 1
n = 1
sum = 0

while n < 4000000

	i = n

	if n % 2 == 0
	  sum = sum + i
	end

	n = p + i
	p = i
end

puts sum
