import { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react'; 

// Import Styled Components
import { FooterContainer, FlexWrap } from './Footer.atoms';
// import { PressCoverage } from '../../components';
import Link from 'next/link';

const SocialLink: FC<{ url: string; imgSrc: string; altText: string }> = ({
    url,
    imgSrc,
    altText,
}) => {
    const style = {
        border: 'none',
    };

    return (
        <Link href={url} passHref>
            <a
                css={{
                    border: 'none',
                }}
                target='_blank'
                rel='noopener noreferrer'
            >
                <img
                    css={{
                        width: '24px',
                        height: '24px',
                    }}
                    width='24px'
                    height='24px'
                    src={imgSrc}
                    alt={altText}
                />
            </a>
        </Link>
    );
};

const CopyNotice = styled.div(() => css({
    fontSize: '0.75em',
    margin: '30px 0 20px 0',
    textAlign: 'center',
}));


const Title = styled.div(() => css({
    color: '#fafafa',
    fontSize: '2.5em',
    fontWeight: 'lighter',
}));

const FooterTitle = styled.div(() => css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
}));

const SocialWrapper = styled.div(() => css({
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0',

    ['a']: {
        display: 'block',
        margin: '0 10px',
    },
}));

const Footer = () => (
    <>
        {/* <PressCoverage /> */}
        <FooterContainer>
            <FlexWrap>
                <FooterTitle>
                    <div css={{
                        marginRight: '10px',
                    }}>
                        <img height="60px" width="60px" src='/tombstone-alt.svg' alt="Tombstone" />
                    </div>
                    <Title>纪念碑谷</Title>
                </FooterTitle>
                <div>
                    <p>
                        「纪念碑谷」是一个纪念那些曾经辉煌过而已死亡的中文互联网产品。有很多优秀的产品，打败它们的往往不是敌人或自己，而是时间。 
                        
                        我们希望在这里记录那些已经消失的名字，让它们存在我们的记忆中。
                    </p>
                    <p>
                        这是一个开源的项目，网站源码和灵感皆来自于「<a
                            href="https://killedbygoogle.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Killed by Google
            </a>」
            。像该项目一样，你可以往
            <a
                            href="https://github.com/hutusi/killedbytime"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        「Killed by Time」项目
            </a>
            中添加产品信息，也可以在<a href="https://github.com/hutusi/killedbytime/issues">「GitHub issue」</a>中评论，
                        或者联系我：
            <a
                            href="https://hutusi.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            hutusi.com
            </a>
          </p>
                    
                </div>
                <CopyNotice>
                    <a href="https://github.com/hutusi/killedbygoogle/blob/main/LICENSE">
                        &copy; 2022 hutusi.com
          </a>
          &nbsp;-&nbsp;
          <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">
                        This site is powered by Netlify.
          </a>
          &nbsp;-&nbsp;
          <a href="https://analytics.kbg.rip" target="_blank" rel="noopener noreferrer">
                        Analytics
          </a>
                </CopyNotice>
                <SocialWrapper>
                    <SocialLink
                        url="https://github.com/hutusi/killedbygoogle"
                        altText="GitHub"
                        imgSrc='/github.svg'
                    />
                    <SocialLink
                        url="https://twitter.com/hutusi"
                        altText="Twitter"
                        imgSrc='/twitter.svg'
                    />
                </SocialWrapper>
            </FlexWrap>
        </FooterContainer>
    </>
);
export default Footer;
