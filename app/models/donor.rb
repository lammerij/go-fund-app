class Donor < User
    has_many :donations
    has_many :fundraisers, through: :donations
end 