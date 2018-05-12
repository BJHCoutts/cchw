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