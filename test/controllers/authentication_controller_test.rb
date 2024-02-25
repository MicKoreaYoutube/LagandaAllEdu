require 'test_helper'

class AuthenticationControllerTest < ActionDispatch::IntegrationTest
  test "should get join" do
    get authentication_join_url
    assert_response :success
  end

  test "should get login" do
    get authentication_login_url
    assert_response :success
  end

  test "should get logout" do
    get authentication_logout_url
    assert_response :success
  end

end
