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

check = 600851475143
#check = 122

k = sqrt(check)
j = k

while j > 0

  if isPrime(j) and (check % j == 0)
  	puts j
  	break
  end

  if j % 2 != 0
  	j -= 2
  else
    j -= 1
  end

end
