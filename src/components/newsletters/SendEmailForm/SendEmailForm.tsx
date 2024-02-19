import { Input } from "app/components/shared/Input";
import { Dropdown } from "app/components/shared/Dropdown";
import { Button } from "app/components/shared/Button";
import { useEffect, useState } from "react";
import { getTemplates } from "app/actions/templateActions";
import { FaPaperPlane } from "react-icons/fa";
import { sendNewsletter } from "app/actions/newslettersActions";
import styles from './SendEmailForm.module.sass'

export const SendEmailForm = () => {
  const [name, setName] = useState('');
  const [templates, setTemplates] = useState<templateDataType[]>([]);
  const [recipients, setRecipients] = useState("");
  const [sendToAll, setSendToAll] = useState(false);
  const dropdownOptions = templates.map((template) => ({ id: template.id, value: template.name }));
  const [selectedTemplate, setSelectedTemplate] = useState<optionType>(dropdownOptions[0]);
  const [sending, setSending] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const procesedRecipients = recipients.split(',').map((recipient) => ({ email: recipient.trim() }));
    const data = {
      newsletter_name: name,
      template_id: selectedTemplate.id,
      recipients: sendToAll ? [] : procesedRecipients
    };

    setSending(true);
    const response = await sendNewsletter(data);
    setSending(false);
  }

  return (
    <form className={styles.SendEmailForm} onSubmit={handleSubmit}>
      <Input type="text" label="Name" name="name" placeholder="name" value={name} onChange={handleNameChange} required />
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