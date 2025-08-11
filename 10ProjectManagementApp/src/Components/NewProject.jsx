import './NewProject.css';

export default function NewProject({ ref1, ref2, ref3, saver, deleter }) {
  return (
    <div className="N1">
      <div className="btn4">
        <button onClick={deleter} className="btn4a">Cancel</button>
        <button onClick={saver} className="btn4b">Save</button>
      </div>

      <div>
        <label htmlFor="title">Title</label><br />
        <input id="title" ref={ref1} type="text" /><br />

        <label htmlFor="description">Description</label><br />
        <textarea id="description" ref={ref2} rows="4" cols="40" /><br />

        <label htmlFor="due-date">Due Date</label><br />
        <input id="due-date" ref={ref3} type="date" /><br />
      </div>
    </div>
  );
}
