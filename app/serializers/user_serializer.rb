class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :display_name, :type, :password_digest
end
