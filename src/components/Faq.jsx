import React from 'react';

const Faq = () => {
    const data = [
        { id: 1, title: "What is Katana Inu?", decscription: "A Deflationary Token on Ethereum with a PC-Game Interface and an Innovative NFT Ecosystem, with 4% Ethereum Reward to Holders"},
        //{ id: 2, title: "When do we get our ETH allowances?", decscription: "The Ethereum rewards are automatically credited to the holder’s wallet after about 12 hours."},
        { id: 3, title: "Who are the Team Members?", decscription: "A Group from Space that has come together - 15 Team Members from all over Europe, that has already accompanied many Projects together and is well-rehearsed."},
        { id: 4, title: "There is no Sell or Buy Limit", decscription: "There is no buy and sell limit you can buy and sell on dex and cex that $kata is available on."},
        //{ id: 5, title: "How much should the slippage fee be when buying/selling?", decscription: "The slippage fee is 10%. If this one doesn’t work out, feel free to try 11-15% slippage."},
        { id: 6, title: "Can we do Katana Staking?", decscription: "Yes. Staking is live here: https://staking.katanainu.com" },
        { id: 7, title: "Where can we see the whitepaper?", decscription: "https://katanainu.com/katanainuwhitepaper.pdf"},
        { id:8, title:"When will the game be released?", decscription:"Beta version will be launched Q4 2022, and Full game Q1 2023."},
        { id:9, title:"Will the game launch on different platforms?", decscription:"Yes. After PC version is finished, we will start working on mobile version and other platformers like Playstation and Xbox."},
        { id:10, title:"What is an NFT?", decscription:"An NFT is a “Non-Fungible Token”. Here is a great glossary explaining what NFT's and other crypto terms mean: https://coinmarketcap.com/alexandria/glossary/non-fungible-token"},
        { id:11, title:"Where can players buy and sell NFTs?", decscription:"Buying & selling can be done on our marketplace, but there is also other possiblities like Opensea or Looksrare."},
        { id:12, title:"Who can people contact for promotions, AMAs, proposals?", decscription:"People can reach us on our socials, but for business proposals it would be best to write to fill the form provided on the website."},
        { id:13, title:"Where can I buy $KATA tokens?", decscription:"Best way would be on Pancakeswap or Uniswap with Metamask wallet. We are big supporters of keeping tokens in a non-custodial wallet. Token is also listed on plenty of Centralised Exchanges like Hotbit, Probit, MEXC Global, Bitmart, Digifinex."},
        { id:14, title:"Which blockchain is the game being developed on?", decscription:"The game is on Binance Smart Chain."},
        { id:15, title:"Will Katana Inu be pay to win?", decscription:"Absolutely NOT. We are against pay to win systems."},
        { id:16, title:"What is your vision for the project?", decscription:"For our game to become the biggest competitive P2E game. For our marketplace to become one-stop solution for Game-Fi."},
        { id:17, title:"Where can we learn more about Katana Inu?", decscription:"All information can be found on the website, but if you want help directly feel free to join our discord community."},
        { id:18, title:"What do I need to start earning?", decscription:"X amount of tokens and 2D NFT. 3D skins will act as earning multiplier, but are not necessary."},
        { id:19, title:"Utility of 2D NFTs?", decscription:"There is many!! Read this section carefully to learn more:'Link to 2D utility explanation on website here'"},
        { id:20, title:"Utility of 3D NFTs?", decscription:"Except for the cosmetics, different rarity of skins will give different in-game ranking points. Ranking points are tied to user profile and non-transferable"},
        { id:21, title:"What is The Forge?", decscription:"Forge is the only way to craft immortal skins which will ONLY be available by forging. In-depth information can be found here: 'Link'"},
        { id:22, title:"Can I play the game without NFTs?", decscription:"Yes, game is free to play, but earning skins will be limited, and you will not be able to earn tokens and participate in tournaments."},
        { id:23, title:"How can I earn in the game?", decscription:"You will be able to earn NFTs and tokens. NFTs will be awarded with different in-game mechanics like solving quests, airdrops, unlocking battle pass skins as you level up etc. Tokens will be earned through tournaments, and through ranking on the leaderboard."},
        { id:24, title:"How does the leaderboard work?", decscription:"Rarity of in-game NFTs will affect how much you can earn. Higher rarity NFTs = Higher multiplier of ranking points Higher ranking = more token rewards Leaderboard will have daily, weekly, monthly, and quaterly winners. Users will be able to claim rewards whenever they want."},
        { id:25, title:"Are there any guilds participating in Katana Inu?", decscription:"Yes, we partnered with many guilds which will play the game competitively!"},
        { id:26, title:"Will you organize tournaments?", decscription:"Yes, we will organize tournaments ourselves, and many of our partners and sponsors will organize them as well."},
        { id:27, title:"Who is the team behind Katana Inu?", decscription:"The Katana Inu team is international and has many team members with extensive Web2 & Web3 experience. Full list can be found here: 'Link'"},
        { id:28, title:"What differentiates you from the competition?", decscription:"We are proud to be working on a game that is not only play to earn, but is also really FUN! Check it out yourself!"},
    ]




    return (
        <div className='team-area faq pt-200 pb-100'>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h5 className="sub-title element paroller" data-paroller-factor="-.05" data-paroller-type="foreground" data-paroller-direction="horizontal">Frequently Asked Questions</h5>
                            <h2 className="title paroller" data-paroller-factor=".05" data-paroller-type="foreground" data-paroller-direction="horizontal">Frequently Asked Questions</h2>
                        </div>
                        <p className='text-center pb-5 mt-3 text-light'>Below we have provided our summarized frequently asked Questions. If you have additional Questions, Concerns, improvement Proposals or you would like to Cooperate with us, please get in touch with us by using the Contact Form below</p>
                    </div>
                </div>
            </div>
            <div className='faq-area'>
                <div className='container'>
                <div className="accordion" id="accordionExample">
                        {
                            data.map(val => {
                                return <div className="accordion-item" key={val.id}>
                                <h2 className="accordion-header d-flex justify-content-between align-items-center" id="headingOne">
                                    <button className="accordion-button text-white font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target={ '#collapse' + val.id} aria-expanded="true" aria-controls={'#collapse' + val.id}>
                                        { val.title }
                                    </button>
                                </h2>
                                <div id={ 'collapse' + val.id} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>{ val.decscription }</p>
                                    </div>
                                </div>
                            </div>
                            })
                        }

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
