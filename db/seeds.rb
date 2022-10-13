puts "Clearing database... ⚔️"
Location.destroy_all
Festival.destroy_all
User.destroy_all
Planner.destroy_all
Visit.destroy_all

puts "Creating markers... 📍"

m1 = Marker.create(city: "Grass Valley", state: "California", latitude: 39.219101, longitude: -121.062950)
m2 = Marker.create(city: "Kissimmee", state: "Florida", latitude: 28.294701, longitude: -81.402527)
m3 = Marker.create(city: "Miami", state: "Florida", latitude: 25.761681, longitude: -80.191788)
m4 = Marker.create(city: "Pelham", state: "Tennesse", latitude: 35.316970, longitude: -85.848540)
m5 = Marker.create(city: "Las Vegas", state: "Nevada", latitude: 36.169941, longitude: -115.139832)
m6 = Marker.create(city: "Austin", state: "Texas", latitude: 30.2711286, longitude: -97.7436995)
m7 = Marker.create(city: "Live Oak", state: "Florida", latitude: 30.2949457, longitude: -82.98402)
m8 = Marker.create(city: "San Bernardino", state: "California", latitude: 34.1038997, longitude: -117.3098831)
m9 = Marker.create(city: "Salt Lake City", state: "Utah", latitude: 40.7596198, longitude: -111.8867975)
m10 = Marker.create(city: "Portland", state: "Oregon", latitude: 45.5202471, longitude: -122.674194)

puts "Creating festivals... 🎸"

f1 = Festival.create(name:"Hangtown Music Festival", date: "October 20-23, 2022", lineup_poster: "https://www.musicfestivalwizard.com/wp-content/uploads/2022/05/Hangtown-2022-Lineup-Poster.jpg", average_attendance: "40,000" , average_tix_price: $290 , url: "http://hangtownfestival.com/", genre: "Folk", has_camping: true , marker_id: m1.id )
f2 = Festival.create(name:"III Points", date: "October 21-22, 2022", lineup_poster: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/72/2022/06/14095845/III-2022-POSTER-FINAL_1080x1350_SM.png", average_attendance: "12,000", average_tix_price: $288 , url: "https://www.iiipoints.com/", genre: "Electronic", has_camping: false, marker_id: m3.id)
f3 = Festival.create(name:"Country Thunder Florida", date: "October 21-23, 2022", lineup_poster: "https://tickets4festivals.com/wp-content/uploads/2019/07/Country-Thunder-Florida-Lineup-1.jpg", average_attendance: "36,500", average_tix_price: $175, url: "https://www.countrythunder.com/fl-lineup", genre: "Country", has_camping: true, marker_id: m2.id)
f4 = Festival.create(name:"Summoning of the Eclipse", date: "October 21-22, 2022", lineup_poster: "https://grooveist.com/wp-content/uploads/summoning-of-the-eclipse-festival-2022-lineup-poster.png", average_attendance: "4,000", average_tix_price: $200, url: "https://summoningoftheeclipse.com/", genre: "Dubstep", has_camping: true, marker_id: m4.id)
f5 = Festival.create(name:"When We Were Young", date: "October 22-29, 2022", lineup_poster: "https://nypost.com/wp-content/uploads/sites/2/2022/01/when-we-were-young.jpg?quality=90&strip=all", average_attendance: "80,000", average_tix_price: $180, url: "https://www.whenwewereyoungfestival.com/", genre: "Rock", has_camping: false, marker_id: m5.id)
puts "Creating users... 👥"

u1 = User.create(username: "brooke", password: "1234")
u2 = User.create(username: "wendy", password: "5678")
u3 = User.create(username: "quinn", password: "9012")
u4 = User.create(username: "sheens", password: "3456")

puts "Creating planners... 📝"

p1 = Planner.create(budget: $100, transportation: "Car", lodging: "Sis staying at a hotel, I'm going back home.", friends_attending: "Sister, Marthica!", additional_notes: "Omg, like literally everything.", festival_id: f2, user_id: u4)
p2 = Planner.create(budget: $2000, transportation: "Car", lodging: "Tent Camping", friends_attending: "My sweet honey boo, Joe", additional_notes: "Blankets and beer", festival_id: f1, user_id: u1)
p3 = Planner.create(budget: $2500, transportation: "Plane", lodging: "Hotel Bougious", friends_attending: "Stanley, bestie", additional_notes: "All the fun stuffs!", festival_id: f5, user_id: u3)
p4 = Planner.create(budget: $1000, transportation: "Car", lodging: "Tent Camping", friends_attending: "Whoever wants to go with me.", additional_notes: "Tarot Cards and dark clothes.", festival_id: f4, user_id: u4)

puts "Creating visits... 🚩"

v1 = Visit.create(date_visited: "2019-10-20", been_visited: true, user_id: u1, festival_id: f1)
v2 = Visit.create(date_visited: "2018-10-13", beeen_visited: true,  user_id: u2, festival_id: f2)

puts "Seeding Done! ✅"

