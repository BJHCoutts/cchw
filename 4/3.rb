input=6

def is_prime n
  for i in 2..(n - 1)
    if (n % i) == 0
      return puts "#{n} is not prime"
    else
      return puts "#{n} is prime"
    end
  end
end

is_prime(input)