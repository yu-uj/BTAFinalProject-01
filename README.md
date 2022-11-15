# Bithumb Dagao Neo (빗썸이 다가오네오)
<img width="1119" alt="스크린샷 2022-11-14 오전 9 43 01" src="https://user-images.githubusercontent.com/104472372/201553707-80392876-a7cd-48d6-801a-14ce7467e375.png">


# 📙프로젝트 소개

빠르고 편리한 Explorer, 쉽고 다양한 기능의 Wallet이 지금 다가오 네오!!

**‘Bithumb Dagao Neo’** 는 Neo Private Node를 활용한 Exlorer, Wallet 개발 프로젝트입니다. 빗썸이 다가오네오 Explorer는 프라이빗 노드에 대한 트랜잭션, 블록, 계정들의 정보를 빠르고 쉽게 확인 가능하며, 검색창을 이용한 검색기능을 제공합니다. Wallet은 니모닉 코드를 활용한 계정 복구를 지원하며, NEP17 토큰인 네오, 가스의 전송과 멀티시그 계정의 생성 및 송금을 지원하고 디스코드 채널로의 알림기능을 제공합니다.



## Bithumb Dagao Neo 기술 스택

노드 및 API: Docker, Mongo DB, Python

Wallet : MUI, NeonJs, CSS, React, Crypto, Ethers, Chrome Extension, Axios

Explorer : Axios, AntDesign, React, NeonJs, NodeJs


## Getting Started

### Installing

<!-- * How/where to download your program
* Any modifications needed to be made to files/folders -->

1. clone this repository

```
https://github.com/codestates/BTAFinalProject-01.git
```

2. change directory

Explorer
```
cd BTAFinalProject-01/Explorer/client
```

Wallet
```
cd BTAFinalProject-01/Wallet
```

3. install dependencies

```
npm install
```

### Executing program


### Wallet
<!-- * How to run the program
* Step-by-step bullets -->

```
npm run build
```

크롬 브라우저 > 상단 우측 크롬 확장프로그램 관리 > 상단 좌측 "압축해제된 확장 프로그램을 로드합니다" 클릭 > Wallet에 build 폴더 업로드
크롬 상단 우측 크롬 확장프로그램에서 Neo Wallet 클릭

### Explorer
<!-- * How to run the program
* Step-by-step bullets -->

```
npm run start
```

### Node ReadMe
(https://github.com/codestates/BTAFinalProject-01/tree/main/Node)
### Daemon ReadMe
(https://github.com/codestates/BTAFinalProject-01/tree/main/Daemon)

<br/>

## 선정 코인 소개 (NEO)

### 📟 개요

> **스마트 이코노미를 위한 분산 네트워크**
> 

> **목표** :  Neo는 블록체인 기술과 디지털 ID를 사용하여 자산을 디지털화하고, 디지털 자산에 대한 스마트 계약을 사용하여 자체 관리하고, 분산 네트워크를 통해 "스마트 경제"를 달성
> 

### 📟  알고리즘 및 특징

✅  **합의 메커니즘 : dBFT**

위임된 비잔틴 장애 허용(Delegated Byzantine Fault Tolerant)는 대리 투표를 통해 대규모 합의 참여를 가능하게 하는 비잔틴 장애 허용 합의 메커니즘. 

NEO 토큰 보유자는 투표를 통해 지지하는 합의 노드를 선택할 수 있음. 선택된 합의 노드 그룹은 BFT 알고리즘을 통해 합의에 도달하고 새로운 블록을 생성. 투표는 정해진 기간이 아닌 실시간으로 진행.

dBFT는 n개의 합의 노드로 구성된 합의 시스템에 대해 f = ⌊(n-1) / 3 ⌋의 내결함성을 제공. 이 내결함성에는 보안과 가용성이 모두 포함되며 일반 및 비잔틴 장애에 대한 내성이 있으며 모든 네트워크 환경에 적합. **dBFT는 최종 확인이 완료되면 블록을 분기할 수 없으며 트랜잭션이 취소되거나 롤백되지 않음.**

블록 생성에는 약 15~20초가 소요되며 트랜잭션 처리량은 최대 약 **1,000TPS**까지 측정되며, 이는 퍼블릭 체인 중 우수한 성능. 적절한 최적화를 통해 10,000TPS에 도달할 가능성 있음.

dBFT는 디지털 신원 기술을 결합하여 합의 노드가 개인 또는 기관의 실명이 될 수 있음을 의미. 따라서 법원의 결정에 따라 동결, 취소, 상속, 회수 및 소유권 이전이 가능. 이를 통해 Neo 네트워크에 규정 준수 금융 자산을 쉽게 등록할 수 있음.

+ [노드](http://wiki.hash.kr/index.php/%EB%85%B8%EB%93%9C)를 운영하는 [북키퍼](http://wiki.hash.kr/index.php/%EB%B6%81%ED%82%A4%ED%8D%BC)(Book Keeper)의 60% 이상이 동의할 경우에만 합의가 이루어지는 방식이다. 이를 위해 먼저 네오 코인 사용자들은 투표를 통해서 대표자인 북키퍼를 선출한다. 위임 프랙티컬 비잔틴 장애 허용(dPBFT) 방식을 통해 선출된 북키퍼들은 [블록](http://wiki.hash.kr/index.php/%EB%B8%94%EB%A1%9D)을 검증할 때마다 [랜덤](http://wiki.hash.kr/index.php/%EB%9E%9C%EB%8D%A4)으로 그 중에서 다시 블록 생성자(BP)들이 결정되고, 이 중 3분의 2 이상의 북키퍼들이 검증에 동의하여 합의가 이루어지면, 새로운 블록이 생성된다.

![https://steemitimages.com/1280x0/https://cdn.steemitimages.com/DQmUtTsfhb11ENwwvfifL5b1QFqmmeL88RSgwAzqJQoLA6L/Screen%20Shot%202018-05-26%20at%204.52.13%20PM.png](https://steemitimages.com/1280x0/https://cdn.steemitimages.com/DQmUtTsfhb11ENwwvfifL5b1QFqmmeL88RSgwAzqJQoLA6L/Screen%20Shot%202018-05-26%20at%204.52.13%20PM.png)

![image](https://user-images.githubusercontent.com/99964401/201851001-b1c7f44d-3a86-49fe-8fd1-d12327705d20.png)

### ✏️ 네오를 선택한 이유

네오는 2015년 출시된 중국 최초의 블록체인으로, 독자적인 스마트 컨트랙트 기술인 네오 컨트랙트를 기반으로 중국에 이더리움이라 불릴만큼 이더리움과 비슷한 가능(SC, Dapp등)을 제공합니다. 향후 중국의 암호화폐에 대한 규제가 풀리게되면 더욱 각광받을 암호화폐라고 생각합니다. 

또한, 이더리움 처럼 가상 머신(VM)에서 실행되지만 개발자들이 쉽게 개발 하기 위해 독자적인 VM을 통해 C, Java, Go, Python, JS등 다양한 개발 언어를 지원하기 때문에 다양한 개발 언어를 사용하는 우리 팀이 개발을 진행하기에 언어 선택의 폭이 넓을 것이라 생각했습니다.

마지막으로 Neo에서는 계정의 종류로 normal 뿐아니라 다중서명 계정 (multisig) 또한 제공하여 이론으로만 접했던 multisig account를 통한 트랜잭션 생성 및 서명, 전송등의 enhancement 기능을 저희 프로젝트에 녹여낼 수 있을 것이라 생각하여 선택 하게 되었습니다.

 

## 프로젝트 상세

### 0.

**팀명** : **(빗)썸 타고싶다.**

**개발 프로젝트명** : **빗썸**이 다가오**네오** (**bithumb** Dagao **Neo**)


### I. 개요

빗썸이 다가오네오(bithumb Dagao Neo) 프로젝트는 네오(NEO) 블록체인에 대한 1.프라이빗 네트워크를 구축하고 이 네트워크 상의 2.Block, Tx, Acccount 기록을 탐색 할 수 있는 웹기반 익스플로어,  3. normal, multisig 계정을 생성하고 프라이빗 네트워크에 트랜잭션을 전송할 수 있는 크롬 익스텐션 기반의 지갑을 제공 합니다. 

### II. 기술 스텍

1. **노드, Daemon, API**
    
    Docker, Mongo DB, Python
    
2. **Wallet**
    
    MUI, NeonJs, CSS, React, Crypto, Ethers, Chrome Extension, Axios
    
3. **Explorer**
    
    Axios, AntDesign, React, NeonJs, NodeJs
    

### III. 핵심기능

**[** **지갑 ]**

- 지갑 생성
- 로그인
- 토큰 전송
- MultiSig Account 생성
- MultiSig Account를 통한 트랜잭션 생성, 서명, 전송 및 디스코드 메시지 전송

**[ 익스플로어 ]**

- 현재 노드의 상태를 통합하여 보여주는 Overview
- 트랜잭션 조회
- 블록 조회
- Address 조회 (잔고, NEP17 토큰 거래 내역 리스트 조회)
- 검색창에서 Tx, Block number, Addres 검색 기능

**[ 노드 ]**

- 블록 생성용(1Consensus) + 블록 검증용 (2 Client) (dBFT) 구성
- RPC 호출, DB동기화
- Rest API 제공

### IV.차별점

- [Wallet] 크롬 익스텐션 개발 , 실제 제품과 유사한 기능
- [Wallet] 니모닉 코드로 계정 복구
- [Wallet] MultiSig Account 생성, Tx생성, 서명, 전송과 디스코드 메시지 전송 기능
- [Explorer] Tx, Block number, address로 검색할 수 있는 Search Box
- [Explorer] Restfull API를 사용하여 빠른 반응성

## 프로젝트 상세

## 01. 지갑(Wallet)

`빗썸이 다가오네오` 지갑은 프라이빗 노드에 대한 지갑 관리를 지원하는 크롬 익스텐션 기반 소프트웨어 지갑입니다. 이 지갑은 중앙 서버의 통제 없이 사용자 지갑 정보를 로컬에서 관리할 수 있도록 설계되어 중앙화된 서버에 대한 공격으로부터 자유롭고, 다중 서명 계정을 지원하며 다중 서명 계정에 대한 모든 동작을 디스코드 메시지로 다른 소유자들과 공유 할 수 있습니다.

1. **보안**

지갑 생성시 니모닉 구문이 발급되고 해당 니모닉 구문으로 지갑을 복구 할 수 있습니다. Neo의 계정에 대한 다양한 키들에 대한 상호관계와 Hierarchy는 아래 그림과 같습니다. ↔ 는 서로를 유도해 낼수 있는 관계를 의미하며(동등한 계급을 의미), ⬇️는 단방향으로의 유도는 가능하나 그 역으로 유도하는것은 불가한 관계를 의미합니다.

![image](https://user-images.githubusercontent.com/99964401/201851266-29234212-8d07-47fa-80ca-d05a20bad893.png)

(NEP2*는 NEP2 standard에서 정의된 NEO만의 새로운 Key로 그 지위는 다른 암호화폐에도 흔히 사용되는 WIF, PrivateKey와 동등한 위치를 가집니다.)

저희 지갑은 어카운트의 다양한 키 들을 로컬에 직접적으로 저장하지 않고 encrypt된 형태로 저장하여 보안적 측면을 강화 하였습니다.

### 🪙 **특별한 기능**

**다중 서명 계정 (multi-signature account)**는 **여러개의 공개키 (Pubkey)**로 구성된 주소로, 이 주소에서 자산을 이전 하려면 한명 이상의 당사자가 서명 해야합니다. 아래 그림은 m / n 다중 서명 주소의 구조를 나타냅니다.

이러한 다중서명 방식은 한명이 비밀키 보관에 실패하게 되어도 다른 사람들의 서명이 없으면 자산을 옮길 수 없게 하여 자산의 안전한 보관에 용이하며, 공동의 재산을 관리 할 때 한사람이 횡령하는 경우를 방지할 수 있고, 2명간의 거래 사이에 중재자로 제3자인 서비스 제공자가 함께 다중 서명 계정을 만듬으로서 블록체인을 활용한 안전 거래에도 활용 될 수 있습니다. 

(많은 투자자들의 거금이 운용되는 암호화폐 거래소에서의 활용은 두말 할것도 없겠쥬🤣)

네오의 다중 서명 계정도 2~16명의 pubkey를 이용하여 생성 할 수 있으며, 서명 순서는 다중 서명 계정을 만들때 공개키의 입력 순서와는 무관하여도 됩니다.

![image](https://user-images.githubusercontent.com/99964401/201851324-e3b7e68d-9e7d-4f50-a526-8a1f8dac8e7d.png)

(다중 서명 계정에 대한 추가 이론적 스터디는 다음 [링크](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3cdd03ab-1f99-4646-bb4a-293e9e8a3d7c/Multi_sig_p2sh_script.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221114T035814Z&X-Amz-Expires=86400&X-Amz-Signature=93cea65eb5b6314ee66f55717c9d488e4b3d5f5d854fc9cda0d5b725c3dcc2c2&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Multi%2520sig%252C%2520p2sh%2520script.pdf%22&x-id=GetObject)에서 찾아 보실 수 있습니다.)

저희 `빗썸이 다가오네오` 지갑에서는 노멀 계정 뿐아니라 다중 서명 계정 또한 쉽게 생성 할 수 있고, 생성 사실을 공개키의 주인들과 디스코드 채널 메시지를 통해 바로 공유할 수 있습니다.

또한 다중 서명 계정을 통한 송금 트랜잭션 생성도 일반 계정의 송금 트랜잭션 생성만큼 간편하며, 이 또한 디스코드 채널을 통해 공유됩니다. 해당 메시지를 받은 다른 멤버들도 메시지에 포함된 인코딩된 Tx을 입력하여 자신의 서명을 추가 할 수 있고, 서명 여부를 디스코드 채널을 통해 공유할 수 있습니다. 이렇게 m 명중 n명의 서명이 완료 되면 지갑을 통해 해당 트랜잭션을 send할 수 있습니다.

### 🖥️ **기능별 설명 및 동작 GIF**

- **지갑 생성 및 니모닉 구문 발급**
    
    1) 지갑 생성
    
    - `니모닉 구문`을 통한 HDWallet 생성
        - `니모닉 구문`을 사용하여 `private key` 생성
        
        ```jsx
        const ethers = require('ethers');
        const mnemonicCode = ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(16));
        ```
        
    - Neo Account 생성
        - `니모닉 구문`으로 생성된 `private key`를 사용하여 Neo 계정을 생성한다. (주소를 발급)
        
        ```jsx
        import wallet from "@cityofzion/neon-js";
        const ethers = require('ethers');
        
        export const getPrivateKeyFromMnemonic = (mnemonicCode) => {
            const mnemonicWallet = ethers.utils.HDNode.fromMnemonic(mnemonicCode);
            const privateKey = mnemonicWallet.privateKey.substring(2);
            return privateKey;
        }
        
        const privateKey = getPrivateKeyFromMnemonic(mnemonicCode);
        const userAccount = new wallet.Account(privateKey);
        ```
        
    - 생성된 계정을 `encryption`하여 `local storage`에 저장
        - `private key`는 사용자가 입력한 `password`를 사용하여 `encryption`된다.
    
    - **(구) 로그인 방식 수정 전 계정 생성 / 니모닉 발급**
        
        ![image](https://user-images.githubusercontent.com/99964401/201851501-aa68334f-f54e-468e-afce-5369deeb992b.png)
        
        ![image](https://user-images.githubusercontent.com/99964401/201851523-b4f085aa-1b01-441d-b5cd-103b1f56f925.png)
        
    
    ### 로그인 방식 수정 후
    
    ![CreateNeoWallet](https://user-images.githubusercontent.com/99964401/201851915-a7e239b2-a92a-48b3-a5a0-1aa8d1c40456.gif)

    
- **로그인**
    - 사용자가 `password`를 입력하여 로그인
        - 입력된 `password`는 암호화된 `private key`를 `decryption` 하는 데에 사용된다.
    - **(구) 로그인 방식 수정 전 로그인**
        
        ![image](https://user-images.githubusercontent.com/99964401/201851628-a77cb61a-f2b6-4b4e-b6d9-14a76699440d.png)
        
    ### 로그인 방식 수정 후
    
    ![LoginNeoWallet](https://user-images.githubusercontent.com/99964401/201851945-900e783b-652b-4dbf-8cd9-ef03523406b8.gif)
    
- **지갑 복구**
    - `니모닉 구문`을 사용하여 `private key`를 생성할 때 결과는 `deterministic`하다. 즉, 동일한 `니모닉 구문`을 입력값으로 받을 시, 매번 동일한 `private key`가 생성된다.
    - 따라서, 암호을 까먹어 더 이상 `private key`를 `decrypt`할 수 없는 경우, 초기 지갑 생성시에 발급받은 `니모닉 구문`을 사용하여 동일한 `private key`를 받을 수 있다.
    - 다시 발급 받은 `private key` 를 `새로운 비밀번호`로 `encryption`한다.
    - 추후, 이 `새로운 비밀번호`를 사용하여 `decrpyion` 할 수 있다.
    
    ```jsx
    export const restoreAccount = async(encryptedAccount, mnemonicCode, newPassword) => {
        const privateKey = getPrivateKeyFromMnemonic(mnemonicCode);
        return {
            "address": encryptedAccount.address,
            "publicKey": encryptedAccount.publicKey,
            "privateKey": await CryptoJS.AES.encrypt(privateKey, newPassword),
            "scriptHash": encryptedAccount.scriptHash
        };
    }
    ```
    
- **지갑 로그아웃 및 초기화**
    
    ![NeoLogout InitWallet](https://user-images.githubusercontent.com/99964401/201851982-149a9c85-beaf-4d72-8565-30332e9ef029.gif)

- **계정 NEO, GAS 토큰 밸런스 확인**

    ![CheckBalanceNeoWallet](https://user-images.githubusercontent.com/99964401/201852404-6dc16523-080a-42e9-8f7e-5e815299ab96.gif)
    
- **토큰 전송**
    
    ![NeoTransfer](https://user-images.githubusercontent.com/99964401/201852190-38abe535-06dd-4e1b-82a2-07d03cdc1974.gif)

    
    - **데이터 처리 방식 수정 전 Transfer**
        
        ![Transfer](https://user-images.githubusercontent.com/99964401/201852277-a7e2e8e1-2340-40e9-a021-d0ce6a536d79.gif)
        
    - `script`는 어떤 `주소`(toAddress)로 `어떤 토큰`(tokenHash)이 `얼마 만큼`(tokenAmount) 보내질지 정의되어 있다.
    - 로그인 과정을 거쳐 `userAccount`에는 `decrpytion`된 `private key` 정보가 들어가 있다.
    - `script`와 사용자의 `sign`이 들어간 `transaction`을 완성시킬 수 있다.
    
    ```jsx
    const script = sc.createScript({
    		scriptHash: tokenHash,
    		operation: "transfer",
    		args: [sc.ContractParam.hash160(userAccount.address), 
    					 sc.ContractParam.hash160(toAddress), 
    					 sc.ContractParam.integer(tokenAmount),
    					 sc.ContractParam.any()],
    	});
    
    const myTx = new tx.Transaction({
            signers: [
                {
                    account: userAccount.scriptHash,
                    scopes: tx.WitnessScope.CalledByEntry,
                },
            ],
            validUntilBlock: currentHeight + heightIncrease,
            systemFee: systemFee,
            networkFee: networkFee,
            script,
        }).sign(userAccount, networkMagic, 1024);
    ```
    
- **멀티시그 어카운트 생성**
    
    다중 서명 계정을 만들고자 하는 사람들의 Pubkey를 입력하고, 해당 계정에서 발생한 트랜잭션에 몇명이상 서명을 해야 트랜잭션이 전송될지 결정하는 sining threshold수를 선택합니다. 서명메시지를 보낼 디스코드 webHook 링크를 입력합니다. +,- 버튼을 눌러 입력란을 늘리고 삭제 할 수 있습니다. 다중 서명 계정을 만들수 있는 최소 공개키 갯수는 2명입니다.
    
    
    
    결과 디스코드 메시지
    
    
    
- **멀티시그 트랜잭션 생성**
    
    다중 서명 계정을 통한 트랜잭션 생선은 MultiSig Transfer버튼을 누르고 일반 송금과 같은 정보를 입력합니다. 지갑 UI에서 보이는 동작은 일반 전송과 비슷해 보이나, 뒤에서는 다중 서명 계정으로 생성된 트랜잭션에 트랜잭션 생성한 사람의 서명이 들어가고 이것을 serialize후 bs58로 인코딩하여 길이를 최대한 줄입니다. 그후 이 값을 입력한 webHook link에 해당하는 채널로 트랜잭션 정보와 메시지로 전송합니다.
    
- **멀티시그 트랜잭션 서명**
    
    메시지를 받은 사람은 생성된 트랜잭션에 자신의 서명을 추가하기 위해 get multisig tx버튼을 눌러 서명을 추가하는 페이지로 이동 합니다. 첫번째 입력란에 encoding된 Tx을 입력하고 두번째 입력란에 메시지를 받을 디스코드 채널의 URL을 입력한뒤 서명하기 버튼을 누릅니다.
    
    그러면 인코딩된 트랜잭션을 디코딩 → deserialize를 거쳐 다시 서명 할 수 있는 트랜잭션 class로 복원하고 여기에 해당 계정의 서명을 더한후 다시 인코딩 → serialize 과정을 거쳐 이값을 메시지로 보냅니다.
 
    
- **멀티시그 트랜잭션 전송**
    
    threshold 이상의 참가자가 서명한 트랜잭션은 마찬가지로 get Multisig Tx 페이지에서 전송할 수 있습니다.
    

## 02. 탐색기(Explorer)

`빗썸이 다가오네오` 탐색기는 프라이빗 노드에 대한 Block, Tx, Address 조회를 지원하는 웹 페이지 기반 탐색기 입니다. 프라이빗 노드에 주기적으로 접근하여 업데이트 되는 DB로 부터 Rest API를 통해 정보들을 가져오기 때문에 속도가 빠르며 누구나 쉽게 조회 할 수 있도록 설계 되었습니다.

### 🪙  **특별한 기능**

- **Search Box** : Neon Js의 Verify 기능과 자체적으로 구축한 verify기능으로 입력값의 format이 유효한지 확인하고 해당 입력값이 Tx hash, Block number, Neo Address인지 구분하여 상세페이지로 이동하게 해줍니다. 유효하지  않은 입력값은 Alert로 알려줍니다.
- **Address Detail** : 잔고 조회 뿐 아니라, 해당 Address의 모든 NEP17 토큰(네오, 가스 포함)의 거래 내역을 송신, 발신 구분하여 리스트로 확인 할 수 있습니다.

### 🖥️ **기능 설명 및 동작 GIF**

- **블록 조회**
    
- **트랜잭션 조회**
    
- **계정 조회**
    
    private network에 정상적으로 트랜잭션을 send한적 있는 모든 계정 주소를 확인 할 수 있습니다. 뿐만아니라 상세 페이지에서 해당 계정을 통해 주고 받은 neo와 gas의 거래 기록을 확인 할 수 있습니다.
   
    
- **검색**
    
    Neon Js의 Verify 기능과 자체적으로 구축한 verify기능으로 입력값의 format이 유효한지 확인하고 해당 입력값이 Tx hash, Block number, Neo Address인지 구분하여 상세페이지로 이동하게 해줍니다.
    

### 03. 프라이빗 노드 및 데몬 (Node & Daemon)

Neo Private Node는 Legacy다음에 새로 업데이트된 최신 버전인 NEO3에 대한 것으로, dPBFT합의 알고리즘을 사용하는 Neo의 특성을 고려하여 블록을 생성하는 1개의 Consenses 노드와 블록을 검증 하는 2개의 Client 노드로 이루어져 있습니다. 또한 외부와 원할한 RPC 소통을 하기위한 RPC 플러그인과 NEP17, NEP11 토큰을 추적하기 위해 활용되는 플러그인이 설치 되어있습니다.

데몬 프로그램은  JSON-RPC 기반의 API를 통해서 블록과 트랜잭션 정보들을 DB에 동기화 하는 프로그램 입니다. Python + MongoDB로 구성되어 있으며 Docker Runtime으로 구동합니다. 데몬 구현은 Python의 스케쥴러를 활용하였고, 주기적으로 Block 생성을 담당하는 Consensus 노드의 블록을 15초 (1 블록이 생성되는 평균 시간)마다 확인하여  블록정보,트랜잭션, 계좌잔고, 이체 이력을 MongoDB에 동기화 합니다.

데이터베이스의 정보를 가공하여 블록탐색기에서 블록체인 정보를 쉽고 빠르게 조회 할수 있도록 블록정보,트랜잭션 정보 및 이체기록에 관한 REST API를 제공합니다.  

## Problem & Solution (팀원별)

- **Multisig**
    
    멀티시그의 원리를 이해 하고, neon js를 통해 멀티시그 계정을 생성하고 트랜잭션을 보내는데까지도 어려움이 있었지만, 중앙 서버가 없는 저희 지갑이 어떤 방식으로 다중 서명을 하기위해 다른 사용자와 연락을 할수 있을지에 대해 아이디어 적인 고민이 많았습니다. 결과적으로 트랜잭션을 serialize → bs58을 통한 encoding을 생각하게 되었고, 이것으로부터 서명, 트랜잭션 전송을 하기위해 역과정을 거쳐 트랜잭션을 neon js의 transaction class로 복원하는데 성공 하였습니다. 또한 블록체인을 활용하는 사람들이 자주 사용하는 연락 방법인 디스코드를 통해 이를 전송하고, 지갑 사용자들이 어렵지 않게 다중서명 계정을 이용할 수 있도록 UI를 간소화 시켜 해당 기능을 완성 할 수 있었습니다.
    
- **NODE**
    
    Neo 현재 Neo Legacy와 Neo N3 로 이름은 Neo 지만 호환되지 않은 프로토콜을 가지고 있어 스터디 초반 검색되어 지는 소스 및 문서가 어떤것인  Legacy 이며 N3인지 시행착오를 거쳐야 했습니다. 다행이 각각 버전 별로 다른 지갑주소를 생성하것을 알게 되어 최신 N3 프로토콜에 맞춰 프로젝트를 진행할수 있었습니다.
    
- **OS/Package dependency**
    - Problem: Private node 도커 환경 및 개발 툴이 특정 OS와 특정 버전에서만 지원하는 경우가 많았습니다. Neo는 애초에 윈도우/C#에 친화적으로 만들어졌고, 개발에 필요한 툴들 및 패키지들이 특정 OS에 의존성이 있어 시행착오가 많았습니다.
    - Solution: Private Node를 Ubuntu 환경에서 문제 없이 돌리도록 하였고, 윈도우에서만 돌아가는 Neo-GUI를 사용하지 않고도 빠르게 테스트 해볼 수 있도록, 테스트 케이스들을 우선적으로 작성하고 정리하는 작업을 거쳤습니다. 첫 한 주에 편한 개발 환경을 만들기 위한 리서치와 환경을 구성하는 데에 많은 시간을 소모하였지만, 사전에 이러한 어려운 작업들을 미리 준비하고 끝내놓은 덕분에 잘 마무리 할 수 있었습니다.
- **Encryption, decryption, 그리고 니모닉**
    - “ `니모닉 구문`으로 `비밀번호를 재설정` 할 수 있다.” 일반 월렛 툴만을 사용하는 사용자 입장에서 또한 인터넷 상의 글을 통해서 실제로 저런 것이 어떻게 이루어지는지 이해하는 데에 어려움이 있었고, 완벽히 이해하기까지 꽤 많은 시간이 걸렸습니다. 지갑 생성을 위한 여러 라이브러리를 참고하고 연구하고 테스트해보며, 어떤 것이 `encryption`되고 `decryption` 되어야 하는지, 또 어떤 과정을 거쳐서 이루어 지는지, 이러한 과정들이 물 흐르듯 자연스럽게 이루어 지려면 각 기능의 input과 output은 어떻게 되어야는지에 대한 고민을 많이 해볼 수 있었습니다.
        - `private key` 및 `private key`를 알아낼 수 있는 모든 정보(`니모닉 코드`)는 암호화되지 않은 (`decrypted`) 상태에서 local storage에 `저장해서는 안된다`.
        - `동일한 니모닉 구문`을 사용하면 `매번 같은 private key`를 생성할 수 있다.
        - `비밀번호`를 통해 `private key`를 `encryption`/`decryption` 할 수 있다.
    - 이 세 가지가 이해된 뒤, 더 간단하고 알아보기 쉬운 코드로 구현할 수 있었고, 내가 헷갈리고 헤맨 부분을 더 집중하여 문서를 작성하였습니다.
    - “`니모닉 구문`으로 `비밀번호를 재설정`할 수 있다.” ⇒ “`동일한 니모닉 코드`로 `동일한 private key를 생성`할 수 있고, 내가 입력한 `비밀번호`로 `encryption`된 `private key`는 똑같이 `비밀번호`로 `decryption`할 수 있다.”
- **Wallet User Data 저장**
    - 사용자가 본인 소유의 자산을 직접적으로 관리하는 지갑이 익스텐션 wallet의 목표이기 때문에, 로컬에 저장하는 방식이라도 어떤 데이터를 저장하여 관리할지 팀원들과 고민을 많이 했다.
    - 구현 초기에는 Create Wallet 이후 생성된 사용자의 Wallet password, Mnemonic, Privatekey, Publickey, Address 등의 정보를 모두 Chrome Storage에 저장하였고, 이후 수정을 걸쳐 암호화된 소수의 정보들만 저장을 하였다.

## Reference

**NEO 공식 문서**

[Neo Documentation](https://docs.neo.org/docs/en-us/basic/concept/blockchain/block.html)

**Neon js 공식 문서**

[](https://dojo.coz.io/neo3/neon-js/)

**Neon js 깃허브**

[neon-js/transfer.md at master · CityOfZion/neon-js](https://github.com/CityOfZion/neon-js/blob/master/docs/guides/transfer.md)

## Authors

이름 | 역할 | Github 
---- | ---- | ---- 
오하영 | Explorer 구현, Wallet multisig account, tx구현, NEP17 토큰 전송 테스트 | https://github.com/Hayoung5
이종환 | Node Setup, Daemon API, Rest API 개발, RPC Test | https://github.com/novela77
정웅섭 | Wallet BE: 월렛 생성, 니모닉 코드 생성, 암호 재설정, 토큰 전송 | https://github.com/woongsup123
홍유진 | NEO Wallet Extension 구현, Wallet FE 기능 | https://github.com/yu-uj
