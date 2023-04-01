import css from 'styled-jsx/css'

export default function SelectedPreview({selectedText = ''}) {
  return (
    <p className="preview">
      With the select conntet "<span className="selected-text">{selectedText}</span>", what do you
      want?
      <style jsx> {styles}</style>
    </p>
  )
}

const styles = css`
  .preview {
    display: flex;
    align-items: flex-end;
    margin-top: 13px;
    color: #777;
    font-size: 12px;
    line-height: 17px;

    .selected-text {
      display: inline-block;
      max-width: 100px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`
