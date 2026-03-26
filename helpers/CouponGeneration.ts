export function CouponGeneration(){
    const digits = '0123456789';
    let CouponString = '';
    const len = digits.length;
    for (let i=0 ;i<6;i++){
        CouponString+=digits[Math.floor(Math.random()*len)]
    }
    return CouponString;
}