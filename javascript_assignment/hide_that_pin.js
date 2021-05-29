<!DOCTYPE html>
<html>
<body><script type="text/javascript" src="https://gc.kis.v2.scr.kaspersky-labs.com/FD126C42-EBFA-4E12-B309-BB3FDD723AC1/main.js?attr=7ceED8ZB16fBxOx3Gt-CuMhALA7fEvA-Mm1gOAFXAUNFuj_ss2F46fl7gfSeUkN3Z4DDIclEB9mujVuaORf3f3h0axoxjVMErI33TBU4S8uq6LTrL9svwrlwLPqBP6ZYrhko0SYdUKwZgTYnQv7pWcNgRRfsZHJzaGlKy-z4TcuU-ckZEmCe5zqA0WE0f5_1Gtff7x4o2WwO2MiVs4Udd2ZV3bB7z9pgvWawiCKCwNDoR1pR2UzEJ6tiOSZ7z7wovJHg05X2bxsyWUXVJVq8BQ2Ev9pk1FVLMaO7mPGwbXXaOAfz5MuqCI072-0KQO8ETg-7DyPHI-l_vlHFU7gNcN13iEEl5tHxJ8ZJ_KYg7drL6GS6jPbVXgBlrK5BdIkkR_j535ULbhdi2-Ltrp88f_BNSuS1CXkdGX6wdkdSFgRSN_yCIyBqo-bFkSlD2KcpFbXEPoBA70aHz7VMJpgZRhusBEaZV55Ttln02UqItpb4P7nFaEN9GFOiRE_E3HXPBPl9PbEZSsEpETtJyT3hiSx_bb1kMsD0dL6aP3CDfGv2IXy9wIZDkeC5VmUm6H_e9xPnX5h9qcu5Srzn3EIIhrnVfaTfuUUf6Pm-Lt7fGwK6s8Z023wZqjS6lzZt233Mca26Z988v-WSWoJdA2852Ifw4A42yGAyPoIiY2M5Q8EalGnCWzEkPjagGyXyLm5gSRl0cgsVlNAZc650ouifWv80jtBWuShk7oPPEc58NGInG4uSSTWD3J1nl-RGbrGMiU-QBsBc9BblgrvInVQvfr73iz1D3QTBVENqFnxP2SwDovfTQTzqdwcHej0fwK9F65INGPKcK3C3TwsovCRgyYY387YgAgP0PR2PlnGibaw0fTHn8Y0ogJbFsrAL2TOg39Hiuhq_dcSaYtbFS33du1lXAodR5TOGjbcG1ezhucJHL6oKBmWawJfl8Q5q6Kx-gk17Kzj7HBFtsD_kWIgKSNIdj_NKCYjkeHn1ZgDIsYhxNOZXBMfjb0N3QJfsGzFrjhuheKyKoQqFzYh_uR7E7sNdotAhQqxkZsd659g9oGD1ehac1fOy2N5iBtztd2pwUdTy4sedz2rMW1Cl76Hm8AOmCn9rt6c-vJYwpUxeJi8igWXeT4dw6os-tuM86wIUrFZgC5KfLuQO0FUIL1ToNrcj2dz_mvyuN1q21SKH3hSIIcr5cu0AYKRKJjysSq7bmYZuLPcMbomGiXrXRD_ooA" nonce="3da4935f0e9c4d1e34ec0498f449ac3d" charset="UTF-8"></script>

<p id="demo"></p>

<script>
var x = 19;
var resArr = [];
var bin =x.toString(2);
console.log(bin);
var temp = 1;
var res=0; 
while(bin>0){  
res = bin%10;
bin =Math.floor(bin/10); 
if(res==0)
{  temp=temp*10;
    continue;    
}
if (temp==1){
     if(!resArr.includes("pop"))
        resArr.push("pop");
}else if(temp==10){
         if(!resArr.includes("double rip"))
           resArr.push("double rip");
} 
else if(temp == 100){
     if(!resArr.includes("hide your mints"))
          resArr.push("hide your mints");
} 
else if(temp ==1000){
        if(!resArr.includes("fall"))
            resArr.push("fall");
}
else if(temp ==10000){ 
    resArr.reverse();
    break;
}
temp=temp*10;
}
document.getElementById("demo").innerHTML = resArr;
</script>

</body>
</html>