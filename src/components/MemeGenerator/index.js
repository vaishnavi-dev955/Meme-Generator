import {Component} from 'react'
import {
  MainContainer,
  SubContainer1,
  Heading,
  ListItem,
  ListContainer1,
  GenerateButton,
  MemeContainer,
  ImageHeading,
  Imagepara,
} from './styledComponents'

import './index.css'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    activeoptionId: '',
    isGenerateBtnClick: false,
  }

  onGiveImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onGiveTopText = event => {
    this.setState({topText: event.target.value})
  }

  onGiveBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onSelectFontSize = event => {
    this.setState({activeoptionId: event.target.value})
  }

  onClickGenerate = () => {
    const {activeoptionId} = this.state
    const fontSize = fontSizesOptionsList.filter(
      eachItem => eachItem.optionId === activeoptionId,
    )
    this.setState({
      isGenerateBtnClick: true,
      activeoptionId: fontSize.displayText,
    })
  }

  MemeView = () => {
    const {
      isGenerateBtnClick,
      imageUrl,
      topText,
      bottomText,
      activeoptionId,
    } = this.state
    const actualFontSize = parseInt(activeoptionId)
    return (
      <>
        {isGenerateBtnClick ? (
          <MemeContainer imageUrl={imageUrl} data-testid="meme">
            <ImageHeading fontSize={actualFontSize}>{topText}</ImageHeading>
            <Imagepara>{bottomText}</Imagepara>
          </MemeContainer>
        ) : null}
      </>
    )
  }

  render() {
    const {imageUrl, topText, bottomText, activeoptionId} = this.state
    console.log(activeoptionId)
    return (
      <MainContainer>
        <div className="main-container2">
          <SubContainer1>
            <Heading>Meme Generator</Heading>
            <ListContainer1>
              <ListItem>
                <label htmlFor="imageUrl" className="label-style">
                  Image URL
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  placeholder="Enter the Image Url"
                  className="input-style"
                  onChange={this.onGiveImageUrl}
                  value={imageUrl}
                />
              </ListItem>
              <ListItem>
                <label htmlFor="Toptext" className="label-style">
                  Top Text
                </label>
                <input
                  type="text"
                  id="Toptext"
                  placeholder="Enter the Top Text"
                  className="input-style"
                  onChange={this.onGiveTopText}
                  value={topText}
                />
              </ListItem>
              <ListItem>
                <label htmlFor="Bottomtext" className="label-style">
                  Bottom Text
                </label>
                <input
                  type="text"
                  id="Bottomtext"
                  placeholder="Enter the Bottom Text"
                  className="input-style"
                  onChange={this.onGiveBottomText}
                  value={bottomText}
                />
              </ListItem>
              <ListItem>
                <label htmlFor="fontsize" className="label-style">
                  Font Size
                </label>
                <select
                  className="select-container"
                  id="fontsize"
                  value={activeoptionId}
                  onChange={this.onSelectFontSize}
                >
                  {fontSizesOptionsList.map(eachItem => (
                    <option
                      className="input-style"
                      id="fontsize"
                      value={eachItem.optionId}
                      key={eachItem.optionId}
                    >
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
              </ListItem>
            </ListContainer1>
          </SubContainer1>
          <GenerateButton type="button" onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </div>
        {this.MemeView()}
      </MainContainer>
    )
  }
}

export default MemeGenerator
