def sqrt(num)
  return (num ** 0.5).floor
end

def isPrime(num)
  sqrt = sqrt(num)

  if num == 2
    return true
  end

  if num < 2 or num % 2 == 0
    return false
  end

  i = 3

  while i <= sqrt
    if num % i == 0
       return false
    end
    i += 2
  end

  return true

end

number = 600851475143

j = 3
factors = []

while number > 1

  if isPrime(number)
  	factors.push number
  	puts factors.max
  	break
  elsif number % 2 == 0
    factors.push 2
    number /= 2
  elsif number % j == 0
    factors.push j
    number /= j
  else
    j += 2
  end

end
