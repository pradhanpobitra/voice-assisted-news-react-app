import React, {useState, useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles'

const alanKey = '2828f5b33df0ce5169d3d72640c338f72e956eca572e1d8b807a3e2338fdd0dc/stage'

const imgSrc = 'https://media-exp1.licdn.com/dms/image/C561BAQFzAiAvq0Jg8Q/company-background_10000/0/1565260089604?e=2159024400&v=beta&t=ygcEIMzRHClwTjBwChX2naoGiS2TCeDwozFfEAM73ek'
const App = () => {
    const [newsArticles , setNewsArticles] = useState([])

    const classes = useStyles()
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand : ({ command , articles}) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles)
                }
            }
        })
    },[])
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src={imgSrc} className={classes.alanLogo} alt='alan logo'/>
            </div>
            <NewsCards articles={newsArticles} />
        </div>
    )
}

export default App