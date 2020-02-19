# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# ChatSpace DB設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :messages
- has_many :groups, through: photos_users

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|body|text||
|image|string||
|groups_id|integer|null: false, foregin_key: true|
|users_id|integer|null: false, foregin_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false|
### Association
- has_many :users, through: :groups_users
- has_many :messages
- has_many :groups_users

## groups_usersテーブル
|Column|Type|Option|
|------|----|------|
|groups_id|integer|null: false, foregin_key: true|
|users_id|integer|null: false, foregin_key: true|
### Association
- belongs_to :user
- belongs_to :group
