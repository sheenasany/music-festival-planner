puts "Clearing database... ⚔️"
Location.destroy_all
Festival.destroy_all
User.destroy_all
Planner.destroy_all
Visit.destroy_all

puts "Creating locations... 📍"

l1 = Location.create(city: "Grass Valley", state: "California", latitude: "", longitude: "")

puts "Creating festivals... 🎸"

puts "Creating users... 👥"

puts "Creating planners... 📝"

puts "Creating visits... 🚩"

puts "Seeding Done! ✅"

