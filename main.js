let input = document.getElementById('in');
let output = document.getElementById('out');
let button = document.getElementById('btn');
let key = document.getElementById('angoukey'); 
let password1 //最終的なパスワード
let passcode = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-","L","E",   "h","t","G","a","D","G","V","e","f","t","q","i","-","s","n","m","L","o","o","R","-","N","D","E","q","w","3","y","7","p","8","C","s","a","X"];
let motopass //文字コード２ずつの配列
let num_to_pass = "";
let passcodenum; //
let result; // 結果
let pass = ""; // 最終結果（数字配列）
let passangou; //暗号化用
let angoukey; // 暗号鍵を２桁ごとに区切った配列
let angoukeyangou; //暗号化用に２桁ごとのangoukeyを取り出したもの
let keyvalues; //key.valueを変更しないための変数
let key_value; //key.valueを変えられないことに気づいた
let angouangou; // 暗号化用暗号鍵
let motopasss;

let check1 = document.getElementById('check1');
let check2 = document.getElementById('check2');
let check3 = document.getElementById('check3');
let check4 = document.getElementById('check4');
console.log('whatpass()');
function whatpass(){
	console.log('');
}

function password(){    //クリック時に動く関数
	if(key.value == '0'){
        password1 = '暗号鍵とURLを正しく入力してください';
    }
	try{
    password1 = angouka(input.value);
	}catch(e){
		password1 = '暗号鍵とURLを正しく入力してください';
		alert("エラーが発生しました。   エラーメッセージ：" + e.message);
		console.log(e.message);
	}
    if(password1 == 'undefined'){
        password1 = '暗号鍵とURLを正しく入力してください';
    }
    if(key.value == 'NaN'){
        key.value = '';
        console.log("Nan");
    }
	if(check1.checked == true){ //小文字なし
		password1 = password1.toUpperCase();
	}
	if(check2.checked == true){ //大文字なし
		password1 = password1.toLowerCase();
		if(check1.checked == true){
			password1 = password1.toUpperCase();
			password1 = password1.replace(/A/g, '');
			password1 = password1.replace(/B/g, '');
			password1 = password1.replace(/C/g, '');
			password1 = password1.replace(/D/g, '');
			password1 = password1.replace(/E/g, '');
			password1 = password1.replace(/F/g, '');
			password1 = password1.replace(/G/g, '');
			password1 = password1.replace(/H/g, '');
			password1 = password1.replace(/I/g, '');
			password1 = password1.replace(/J/g, '');
			password1 = password1.replace(/K/g, '');
			password1 = password1.replace(/L/g, '');
			password1 = password1.replace(/M/g, '');
			password1 = password1.replace(/N/g, '');
			password1 = password1.replace(/O/g, '');
			password1 = password1.replace(/P/g, '');
			password1 = password1.replace(/Q/g, '');
			password1 = password1.replace(/R/g, '');
			password1 = password1.replace(/S/g, '');
			password1 = password1.replace(/T/g, '');
			password1 = password1.replace(/U/g, '');
			password1 = password1.replace(/V/g, '');
			password1 = password1.replace(/W/g, '');
			password1 = password1.replace(/X/g, '');
			password1 = password1.replace(/Y/g, '');
			password1 = password1.replace(/Z/g, '');
		}
	}
	if(check3.checked == true){ //数字なし
		password1 = password1.replace(/1/g, '');
		password1 = password1.replace(/2/g, '');
		password1 = password1.replace(/3/g, '');
		password1 = password1.replace(/4/g, '');
		password1 = password1.replace(/5/g, '');
		password1 = password1.replace(/6/g, '');
		password1 = password1.replace(/7/g, '');
		password1 = password1.replace(/8/g, '');
		password1 = password1.replace(/9/g, '');
		password1 = password1.replace(/0/g, '');
	}
	if(check4.checked == true){ //ハイフンなし
		password1 = password1.replace(/-/g, '');
	}
	result = "";
    output.value = password1 ;
}

function angouka(siteurl){ //暗号化関数
    let ps1 =encodeURI(siteurl);  //日本語を記号に変換
    result = ps1.charCodeAt(0); //最初   resultはこの状態では１０進数の文字コード
    for(let i = 1; i < ps1.length; i++){ //１ずつ文字コードに変換していく
        result ="" + result + ps1.charCodeAt(i);
        
    }
    console.log("resultは今：" + result);//1
	if( result.length > 299){
		console.log("非常に長い文字コードだと確認");
		while(result.length > 299){
			result.slice( 0, -1 ) ;
		}
	}

	key_value = parseInt(key.value);
	keyvalues = key_value * 8 +123 ** 9 ;
	//test/////

	result = parseInt(result);
	console.log(result);//1
	result = BigInt(result) * BigInt(keyvalues); //resultを変更する///////////////
	console.log(result);//2
	console.log("key:" + keyvalues);
	result = BigInt(result) % BigInt(keyvalues) ** BigInt(2);
	console.log(result);//3
	result = String(result);

	//test////
    motopass = result.match(/.{2}/g); //2ずつに分割しmotopass(配列)に代入
    console.log(motopass);
	//暗号化/////////////
	passangou = "";
	pass = "";
	keyvalues = String(keyvalues);
	angoukey = keyvalues.match(/.{2}/g); //match関数は文字列.matchでないと動作しないので注意
	for(let i = 0; i < motopass.length; i++){
		angouangou = key_value * i+12 *2 * i
		angoukeyangou = parseInt(angoukey[angouangou % angoukey.length]);
		angoukeyangou = parseInt(angoukeyangou) + 1;
		passangou = parseInt(motopass[i]) % angoukeyangou;
		pass = "" + pass + passangou;
		console.log(pass); //たくさん出るやつ
	}
	motopasss = pass.match(/.{2}/g);  //求めたpassを２ごとに区切りmotopasssに代入

    for(let i =0; i < motopasss.length; i++){ //数字から返還する
        passcodenum = parseInt(motopasss[i]);
        num_to_pass = num_to_pass + passcode[passcodenum];//resultを数字からパスワードに変換しresultに代入する
    }
    result = num_to_pass;
    num_to_pass = "";
    console.log(result);
    return result;
}

button.addEventListener('click',password);