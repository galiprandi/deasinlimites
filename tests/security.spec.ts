import { test, expect } from '@playwright/test';
import { getPostBySlug } from '@/utils/markdown';

test.describe('Security - Path Traversal Prevention', () => {
  test('should reject path traversal in getPostBySlug', async () => {
    await expect(getPostBySlug('dea', '../../README')).rejects.toThrow(
      'Invalid path: Path traversal detected'
    );
  });

  test('should reject path traversal attempting to leave content folder', async () => {
    await expect(getPostBySlug('../', 'guia_dislexia')).rejects.toThrow(
      'Invalid path: Path traversal detected'
    );
  });
});
