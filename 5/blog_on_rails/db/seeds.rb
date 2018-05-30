# %w{ } syntax is a shortcut for creating an array of strings
COW_FILES = %w{
  Frogs Daemon Elephant Kitty Beavis Cheese Turtle Ghostbusters Sheep Dragon Cow
  Stimpy Bunny Stegosaurus Moose Ren Koala Tux Turkey
}

def silly_print(str, cow_file = nil)
  # %{ } is another syntax for creating strings
  # The `system` method executes a string as a shell command
  system(%{cowsay -f #{cow_file || COW_FILES.sample} #{str} | lolcat})
end

# Clear tables before re-seeding them
Comment.destroy_all
Post.destroy_all

100.times.each do
  post = Post.create(
    title: Faker::Book.title,
    body: Faker::Lorem.paragraph
  )

  if post.persisted?
    (0..rand(10)).each do
      post.comments.create(
        body: Faker::Simpsons.quote  
      )
    end
  end
end

posts = Post.all
comments = Comment.all

# Always log seed information
silly_print "Created #{posts.count} posts!", "Frogs"
silly_print "Created #{comments.count} comments!", "Moose"

