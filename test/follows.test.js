import { follow, isFollowing, unfollow } from '../src/follows';
import { expect } from 'chai';


describe('running tests', () => {
  describe('follow', () => {
    it('should call follows', () => {
      follow();
      expect(true).to.be.true;
    });
  });

  describe('isFollowing', () => {
    it('should call isFollowing', () => {
      isFollowing();
      expect(true).to.be.true;
    });
  });

  describe('unfollow', () => {
    it('should call follows', () => {
      unfollow();
      expect(true).to.be.true;
    });
  });
});
