class Offer < ApplicationRecord
  belongs_to :user
  belongs_to :category

  has_many :slots
  has_many :offers
  has_many :rentals, through: :slots
  has_many :reviews, through: :rentals

  has_many_attached :photos
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?

  validates :address, presence: true
  validates :description, presence: true
  # validates :description, length: { minimum: 10 }
  validates :video_type, inclusion: { in: ["VoD", "Live", "Both"] }
  validates :title, presence: true
  # validates :title, length: { minimum: 5 }
  validates :price, numericality: { greater_than: 0 }
  include PgSearch::Model
  pg_search_scope :search_by_city,
    against: [:city],
    using: {
      tsearch: { prefix: true } # <-- now `superman batm` will return something!
    }
end
