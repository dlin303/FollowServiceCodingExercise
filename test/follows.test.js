import { follow, unfollow } from '../src/follows';

describe('running tests', () => {
  describe('follows', () => {
    it('should call follows', () => {
      follow();
    });
  });

  describe('unfollows', () => {
    it('should call follows', () => {
      unfollow();
    });
  });
});
