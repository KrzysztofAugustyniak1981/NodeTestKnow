import crypto from 'crypto';

export function generateHash(password, salt) {
    if (!salt) {
        salt = crypto.randomBytes(16).toString('hex');
    }

    const hash = crypto
    .createHash('sha256')
    .update(password + salt)
    .digest('hex');

    return { hash, salt };
}