<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="https://gc.kis.v2.scr.kaspersky-labs.com/FD126C42-EBFA-4E12-B309-BB3FDD723AC1/main.js?attr=qo8Qk2UeB8iiI-EO5vzuAj4Ph5cK6DkXEYg8Xb_du5yX0pQPO554cPYCo5FPS_QZyDg79PwqRs7jMXrAYaXgFHvqyH4sHE-8P8bNbwh5PXQOsjaSSdbD--hmED8hAcrJORJUL7Q9hTVIUPoJ5HXNWYC7SfIm-6DbgHTSqq9PHb3ku32E0QmHIbKCTFHpzVl1whzxsio-N4g0xVyqY8sJCVBYrhTcc7s0mq5xxsG36aeZMmpwQQn2ZsFdGeVrHEWfVE42xT1E5rKQ4cLCkX-6XAH4rehFZ2N3mNLsnv7I3WD5v5p3kkDt3u05BGYh7ar0PGk-urCJk49zmcE7Rhz8f7WhDhdQQWqIpQQYH_ULcyTWtC8D4BB-k-amk4VvYAyiX1_CwZRtoplbAzwA88Pa-nNAgWMgDK6ntn9FmlbDbOCPpOwc_4g50TX_3SVZjdmnbt7OZ2pyDj8JDOOc1JSu9IszEKzCisP21oVfMIBuO3YxY4lIuEUQPGY8c2bSKl9mB5heRZRhSdMrnDqcTM3-oI4FL0GgI4-E4UiMU0mktQoRBNmJ0S0oLP_SU-vKgpfvM_5yYzxIPa_v66ZmjLyaPmRZnaIoxtBWJ_an9tCBfoGUMEkAmVOfA2xxB3r4itHAX27qqlO_SOa9VansryiWO4yX4zBrfiYGL0wXzFJeI8xuZ_8LubrVpijlS6NPfu5fvsWHIsxYiTgUzk7IPwYYGEewgI68HolTkf0w4H-WSRt3-A9boiRaBcbdTdI5Cah-o_FkEdwu3QNxa4P3gSzdJSwLaLxneFD3SJQSmf2hQqAIU5jyu6OhGDxRm4If7-pei6BYBSKEu64uZ-rmWJE0liRAA2jTRy18WdyhUzSQ9KhdgAEpltT-HDhTb49ChsSTjOCI7WxL2Z8Z77KECk0VhWb9KLGI3Iy3s5CzStlUTxPuo8_C-6RZZLAPJqQIxNZu3iPaTCTIWLLs-swJeIIoEieqXlVjAL485OTDyE6EGunEMhtvj0UAeqn0aPsKJLpDDi5dEivSlz86NjoSLZPF56tbbKhx_nh_R0C5Unqg7cdqIRMmIYqqJZP-sXBZr87QXAbiAruFdpwOmQzhixcXgqPo6tmgVCneKOGBogS6gzpes9HXfAjVPWWY2peqGd2SEp3fn02MtHGkwFf-nC8xKyd_f32jmcAQ4vR1Lw1mnW3lPxSW6KrnJoEWHzFKDUuEB-ihsrj7RPSMUqTP-9HiQg" nonce="03029085517275dc54d71360e9a55088" charset="UTF-8"></script></head>
<body>
 <script>
  function Chai(n,k,g,b){
    n = parseInt(n);
   
    k = parseInt(k);
   
    g = parseInt(g);
   
    b = parseInt(b);

    var output = [];
    var gc = "Green";
    var bc = "Black";
    var j = 0;
    var max = g > b ? gc : bc;
    if ( n == ( g + b ) && ( k!=g && k!=b))
    {  
        for(var i=0;i<n;i++)
            {
                while(i<k)
                    {
                        if(max==gc)
                        { output[i]=gc;
                          g--;
                        }
                        else
                        {
                           output[i]=bc;
                            b--;
                        }
                     i++;
                    }
               
                if(output[i-1]==gc)
                    {
                        output[i]=bc;
                        b--;
                    }else {
                        output[i]=gc;
                        g--;
                    }
                
            }
        return output;
    }
    else
       {
           return output;
       }
}
var output=Chai(5,1,3,2);
console.log(output);
 </script>
</body>
</html>