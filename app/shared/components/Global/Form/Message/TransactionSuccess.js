// @flow
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Button, Header, Icon, Message, Modal, Segment } from 'semantic-ui-react';

import DangerLink from '../../../Global/Modal/DangerLink';

class FormMessageTransactionSuccess extends Component<Props> {
  render() {
    const {
      onClose,
      t,
      transaction,
      transactions
    } = this.props;
    const links = [];
    if (transaction) {
      links.push(<DangerLink
        content={transaction.transaction_id}
        link={`https://explorer.enumivo.org/MainNet/tx/${transaction.transaction_id}`}
      />);
    }
    if (transactions) {
      transactions.map((tx) => {
        links.push(<DangerLink
          content={tx.transaction_id}
          link={`https://explorer.enumivo.org/MainNet/tx/${tx.transaction_id}`}
        />);
      })
    }
    return (
      <Segment basic>
        <Header
          content={t('global_transaction_complete_title')}
          icon="checkmark"
          size="large"
        />
        <Modal.Content>
          <p>{t('global_transaction_complete_message')}</p>
          <Segment padded textAlign="center">
            <p>txids</p>
            {links.map((link, idx) => (
              <p key={idx}>
                #{idx+1}
                {' - '}
                {link}
              </p>
            ))}
            <p>(linked to explorer.enumivo.org)</p>
          </Segment>
          <Message
            icon
            size="large"
            warning
          >
            <Icon
              loading
              name="circle notched"
            />
            <Message.Content>
              <Message.Header>{t('global_transaction_complete_warning_title')}</Message.Header>
              {t('global_transaction_complete_warning_message')}
            </Message.Content>
          </Message>
        </Modal.Content>
        <Modal.Actions>
          <Segment basic clearing>
            <Button color="green" floated="right" onClick={onClose}>
              <Icon name="checkmark" /> {t('close')}
            </Button>
          </Segment>
        </Modal.Actions>
      </Segment>

    );
  }
}

export default translate('global')(FormMessageTransactionSuccess);