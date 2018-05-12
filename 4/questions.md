**1**

str = "i am a small boy eating shrimp"

module HelperMethods
  def titleize (string)
    puts string.split(" ").map{ |word| 
      no_caps = ['in', 'the', 'of', 'and', 'or', 'from', 'a']
      if no_caps.include?word
        word  
      else word.capitalize!
    end}
  end
end

class Obj
end

k = Obj.new

k.extend(HelperMethods)

k.titleize(str)

class Obj2
  include HelperMethods
end

j = Obj2.new.titleize(str)

**2**

class Book
  def initialize
    @title = ""
    @chapters = []
  end
  def title input
    @title = input
  end
  def add_chapter (ch)
    @chapters.push(ch)
  end
  def chapters
    puts "Your book: #{@title} has #{@chapters.count} chapters:"
    puts @chapters
  end
end

book = Book.new
book.title "BOOK NAME"
book.add_chapter("My Awesome Chapter 1")
book.add_chapter("My Awesome Chapter 2")
book.chapters

book

**3**

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

**4**

major_cities = {
  BC: ["Vancouver", "Victoria", "Prince George"], 
  AB: ["Edmonton", "Calgary"]
}

a = major_cities.each do |k,v|
  puts "#{k} has #{major_cities[k].length} main cities: #{major_cities[k][0...-1].join', '} and #{major_cities[k][-1]}"
end
