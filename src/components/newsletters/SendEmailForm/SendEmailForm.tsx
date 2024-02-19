import { Input } from "app/components/shared/Input";
import { Dropdown } from "app/components/shared/Dropdown";
import { Button } from "app/components/shared/Button";
import { useEffect, useState } from "react";
import { getTemplates } from "app/actions/templateActions";
import styles from './SendEmailForm.module.sass'
import { FaPaperPlane } from "react-icons/fa";

export const SendEmailForm = () => {
  const [name, setName] = useState('');
  const [templates, setTemplates] = useState<templateDataType[]>([]);
  const [recipients, setRecipients] = useState("");
  const [sendToAll, setSendToAll] = useState(false);
  const dropdownOptions = templates.map((template) => ({ id: template.id, value: template.name }));
  const [selectedTemplate, setSelectedTemplate] = useState<optionType>(dropdownOptions[0]);

  const handleSelect = (option: optionType) => {
    setSelectedTemplate(option);
  }

  useEffect(() => {
    getTemplates().then((data) => {
      setTemplates(data);
      setSelectedTemplate({ id: data[0].id, value: data[0].name });
    });
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleRecipientsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipients(e.target.value);
  }

  const handleSendToAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSendToAll(e.target.checked);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const procesedRecipients = recipients.split(',').map((recipient) => recipient.trim());
    const data = {
      name,
      templateId: selectedTemplate.id,
      recipients: sendToAll ? [] : procesedRecipients
    };

    console.log(data);
  }

  return (
    <form className={styles.SendEmailForm} onSubmit={handleSubmit}>
      <Input type="text" label="Name" name="name" placeholder="name" value={name} onChange={handleNameChange} required/>
      {dropdownOptions.length > 0 && <Dropdown options={dropdownOptions} selected={selectedTemplate} onSelect={handleSelect} label="Template" />}
      <Input
        type="text"
        label="Recipients"
        name="recipients"
        placeholder="email1@io.com,email2@io.com"
        value={recipients}
        onChange={handleRecipientsChange}
        disabled={sendToAll}
      />
      <span className={styles.SendEmailForm__disclaimer}>If you want to send more than one recipient separate them by comma (&quot;,&quot;)</span>
      <label>
        <input type="checkbox" checked={sendToAll} onChange={handleSendToAllChange} /> <span>Send to all suscriptors</span>
      </label>
      <div className={styles.SendEmailForm__buttonWrapper}>
        <Button>
          <FaPaperPlane />
          Send
        </Button>
      </div>
    </form>
  );
};