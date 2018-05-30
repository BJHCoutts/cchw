major_cities = {
    BC: ["Vancouver", "Victoria", "Prince George"], 
    AB: ["Edmonton", "Calgary"]
  }
  
  a = major_cities.each do |k,v|
    puts "#{k} has #{major_cities[k].length} main cities: #{major_cities[k][0...-1].join', '} and #{major_cities[k][-1]}"
  end
  