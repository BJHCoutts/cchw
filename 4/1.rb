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