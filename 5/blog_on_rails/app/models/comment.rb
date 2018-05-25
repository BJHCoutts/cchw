class Comment < ApplicationRecord
  belongs_to :user
  
  validates :body, presence: true

  belongs_to :post
end
