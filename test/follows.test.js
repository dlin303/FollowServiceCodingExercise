import { follow, isFollowing, unfollow } from '../src/follows';
import { expect } from 'chai';


describe('running tests', () => {
  describe('follow', () => {
    it('should call follows', () => {
      expect(follow(0, 100).statusCode).equals(200);
    });
  });

  describe('isFollowing', () => {
    it('should call isFollowing', () => {
      expect(isFollowing(0, 45).isFollowing).equals(true);
    });
  });

  describe('unfollow', () => {
    it('should call follows', () => {
      expect(unfollow(0, 45).statusCode).equals(200);
    });
  });
});
